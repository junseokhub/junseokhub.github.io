import { useState } from "react";
import { Container, Typography, Box, Paper, Grid, Link, Pagination } from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LaunchIcon from "@mui/icons-material/Launch";
import opensourceData from "../data/opensource.json";

interface OpenSourceItem {
  title: string;
  description: string[];
  tags: string[];
  link?: string;
}

function OpenSource() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; 
  const pageCount = Math.ceil(opensourceData.length / itemsPerPage);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    document.getElementById("opensource")?.scrollIntoView({ behavior: "smooth" });
  };

  const displayedData = opensourceData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box id="opensource" component="section" sx={{ width: "100%" }}>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          py: "5%",
          px: { xs: "5%", md: "10%" },
          textAlign: "left",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 6, fontSize: "2em", color: "text.primary" }}
        >
          OpenSource
        </Typography>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          {displayedData.map((item: OpenSourceItem, index) => (
            <Grid size={{ xs: 12, md: 4 }}  key={index} sx={{ display: "flex" }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  width: "100%",
                  borderRadius: 4,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.03)"
                      : "#fdfdfd",
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  minHeight: "350px", 
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? "0 8px 24px rgba(0,0,0,0.5)"
                        : 4,
                    borderColor: "#a370f7",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <IntegrationInstructionsIcon
                      color="primary"
                      sx={{ fontSize: 32 }}
                    />
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{ color: "text.primary" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "text.disabled",
                        "&:hover": { color: "#a370f7" },
                      }}
                    >
                      <LaunchIcon sx={{ fontSize: 20 }} />
                    </Link>
                  )}
                </Box>

                <Box sx={{ flexGrow: 1, mb: 3 }}>
                  {item.description.map((desc, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        mb: 1,
                      }}
                    >
                      <CheckCircleOutlineIcon
                        sx={{
                          fontSize: 16,
                          mr: 1.2,
                          mt: "4px",
                          color: "text.disabled",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          lineHeight: 1.7,
                          color: "text.secondary",
                          fontWeight: 500,
                          flex: 1,
                          wordBreak: "keep-all",
                        }}
                      >
                        {desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {item.tags.map((tag, idx) => (
                      <Typography
                        key={idx}
                        variant="caption"
                        sx={{ color: "#a370f7", fontWeight: "bold" }}
                      >
                        #{tag}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {pageCount > 1 && (
          <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChange}
              color="secondary"
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "text.secondary",
                  "&.Mui-selected": {
                    bgcolor: "#a370f7",
                    color: "#fff",
                    "&:hover": { bgcolor: "#8b56e0" },
                  },
                },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default OpenSource;