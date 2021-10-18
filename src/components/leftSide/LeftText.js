import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import questions from "../../data/questions";
import "./left.css";

const LeftText = () => {
  const question = questions[8].title;
  const desc = questions[8].desc;
  const difficulty = questions[8].diffLevel;
  const testCase = questions[8].testCases[0];
  const num = questions[8].num;
  const { input, output, explaination } = testCase;
  console.log(num);
  console.log(testCase);
  console.log(input);

  return (
    <div className="left">
      <div className="question">
        <Typography
          className="ques-name"
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.5rem",
            fontWeight: "bold",
          }}
        >
          <span>Q. </span> {question}
        </Typography>
        <div className="popularity">
          <Stack direction="row" spacing={1}>
            <Chip size="small" label={difficulty} color="primary" />
            <Chip
              size="small"
              icon={<ThumbUpIcon />}
              label="50"
              color="success"
            />
            <Chip
              size="small"
              icon={<ThumbDownIcon />}
              label="10"
              color="success"
            />
            <BookmarkIcon color="primary" />
          </Stack>
        </div>
        <Typography
          fontSize="medium"
          className="description"
          align="left"
          mt={2}
        >
          {desc}
        </Typography>
      </div>
      <Box
        className="example"
        sx={{
          border: "3px solid rgb(216,216,216, 0.2)",
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "10px",
          fontWeight: "600",
          background: "rgba(0, 0, 0, 0.4)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Typography variant="h5" component="h1" className="exampleNo">
          Example {num}
        </Typography>
        <div className="input" style={{ marginTop: "1rem" }}>
          Input : <span> {input}</span>
        </div>
        <div className="output">
          Output : <span> {output}</span>
        </div>
        <div className="explaination">Explaination: {explaination}</div>
      </Box>
      {/* <div className="examples" style={{ marginTop: "1rem" }}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Examples:
        </Typography>
        <div className="example1"></div>
      </div> */}

      <div className="inputExample"></div>
      <div className="expectedOutput"></div>
    </div>
  );
};

export default LeftText;
