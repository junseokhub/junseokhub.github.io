import { useState, useEffect } from "react";

interface UseMarkdownNavigationProps {
  initialMarkdown: string | null;
  open: boolean;
}

export function useMarkdownNavigation({ initialMarkdown, open }: UseMarkdownNavigationProps) {
  const [displayedMarkdown, setDisplayedMarkdown] = useState<string | null>(null);
  const [loadingMd, setLoadingMd] = useState(false);
  const [errorMd, setErrorMd] = useState<string | null>(null);
  const [currentMdPath, setCurrentMdPath] = useState<string | null>(null);
  const [historyStack, setHistoryStack] = useState<string[]>([]);

  useEffect(() => {
    if (open) {
      setDisplayedMarkdown(initialMarkdown || null);
      setErrorMd(null);
      setLoadingMd(false);
      if (initialMarkdown && currentMdPath !== "initial") {
        setCurrentMdPath("initial");
        setHistoryStack([]);
      } else if (!initialMarkdown && currentMdPath !== null) {
        setCurrentMdPath(null);
        setHistoryStack([]);
      }
    }
  }, [initialMarkdown, open]);

  const fetchMarkdown = async (path: string) => {
    setLoadingMd(true);
    setErrorMd(null);

    try {
      const fetchPath = path.startsWith("./") ? path.replace("./", "/data/") : path;

      const res = await fetch(fetchPath);
      if (!res.ok) {
        throw new Error(`파일을 불러오는데 실패했습니다: ${res.status} ${res.statusText}`);
      }
      const text = await res.text();
      setDisplayedMarkdown(text);
      setCurrentMdPath(path);
    } catch (err: any) {
      console.error("Markdown fetch error:", err);
      setErrorMd(err.message || "알 수 없는 파일 로딩 오류");
      setDisplayedMarkdown(null);
    } finally {
      setLoadingMd(false);
    }
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith("./")) {
      if (currentMdPath && currentMdPath !== "initial") {
        setHistoryStack((prev) => [...prev, currentMdPath]);
      } else if (currentMdPath === "initial" && initialMarkdown) {
        setHistoryStack((prev) => [...prev, "initial"]);
      }
      fetchMarkdown(href);
    }
  };

  const handleBackClick = () => {
    if (historyStack.length > 0) {
      const prevPath = historyStack[historyStack.length - 1];
      setHistoryStack((prev) => prev.slice(0, prev.length - 1));

      if (prevPath === "initial") {
        setDisplayedMarkdown(initialMarkdown || null);
        setCurrentMdPath("initial");
        setLoadingMd(false);
        setErrorMd(null);
      } else {
        fetchMarkdown(prevPath);
      }
    }
  };

  return {
    displayedMarkdown,
    loadingMd,
    errorMd,
    currentMdPath,
    historyStack,
    handleLinkClick,
    handleBackClick,
  };
}
