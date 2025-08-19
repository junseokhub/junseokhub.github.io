export const fetchMarkdownContent = async (title: string): Promise<string> => {
  try {
    const response = await fetch(`/data/${title}.md`);

    if (!response.ok) {
      throw new Error(`Markdown 파일을 불러오는 데 실패했습니다: ${response.status} ${response.statusText}`);
    }

    const content = await response.text();
    return content;
  } catch (error) {
    console.error("fetchMarkdownContent 오류:", error);
    return 'Markdown 내용을 불러오는 데 오류가 발생했습니다.';
  }
};