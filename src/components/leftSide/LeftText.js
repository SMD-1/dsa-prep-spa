import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import questions from "../../data/questions";
import "./left.css";

const LeftText = () => {
  const question = questions[0].title;
  const desc = questions[0].desc;
  const difficulty = questions[0].diffLevel;
  const testCase = questions[0].testCases[0];
  const num = questions[0].num;
  const { input, output, hidden } = testCase;
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
            <Chip
              size="small"
              label={difficulty}
              color="info"
              variant="outlined"
            />
            <Chip
              size="small"
              icon={<ThumbUpIcon />}
              label="50"
              variant="outlined"
              color="success"
            />
            <Chip
              size="small"
              icon={<ThumbDownIcon />}
              label="10"
              variant="outlined"
              color="success"
            />
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
      <Box>
        <div className="exampleNo">Example {num}</div>
        {`${output} ${output} ${hidden}`}
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
