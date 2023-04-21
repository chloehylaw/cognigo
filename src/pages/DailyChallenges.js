import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./dashboard.css";
import { BsEmojiSmile, BsFire } from "react-icons/bs";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import chess from "../images/chess.jpg";
import crossword from "../images/crossword.png";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import ReplayIcon from "@mui/icons-material/Replay";
import EastIcon from "@mui/icons-material/East";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import PendingIcon from "@mui/icons-material/Pending";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React, { useState, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import { AiFillStar } from "react-icons/ai";

function createData(day, status, replay) {
  return { day, status, replay };
}
export default function DailyChallenges() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const disabledRowStyles = {
    opacity: 0.5, // Reduce the opacity to make it look disabled
    cursor: "not-allowed", // Set the cursor to "not-allowed" to indicate that it's disabled
  };

  const rows = [
    createData(
      "Monday",
      <CheckCircleIcon style={{ color: "green", fontSize: 30 }} />,
      <ReplayIcon style={{ fontSize: 30 }} />
    ),
    createData(
      "Tuesday",
      <CheckCircleIcon style={{ color: "green", fontSize: 30 }} />,
      <ReplayIcon style={{ fontSize: 30 }} />
    ),
    createData(
      "Wednesday",
      <CheckCircleIcon style={{ color: "green", fontSize: 30 }} />,
      <ReplayIcon style={{ fontSize: 30 }} />
    ),
    createData(
      "Thursday",
      <CloseIcon style={{ color: "red", fontSize: 30 }} />,
      <ReplayIcon style={{ fontSize: 30 }} />
    ),
    createData(
      "Friday",
      <PendingIcon style={{ color: "#ed7014", fontSize: 30 }} />,
      <IconButton aria-label="scroll down" onClick={handleClick}>
        <KeyboardDoubleArrowDownIcon />
      </IconButton>
    ),
    createData(
      "Saturday",
      <HourglassBottomIcon style={{ color: "grey", fontSize: 30 }} />,
      <InfoIcon style={{ fontSize: 30 }} />
    ),
    createData(
      "Sunday",
      <HourglassBottomIcon style={{ color: "grey", fontSize: 30 }} />,
      <InfoIcon style={{ fontSize: 30 }} />
    ),
  ];

  return (
    <div className="containerDiv">
      <h1>
        <strong>Daily Challenge</strong>
      </h1>
      <div className="gridContainerDiv">
        <Container fluid="md">
          <Row>
            <Col className="dashSection">
              <div className="profileInfo" style={{ textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ margin: "0" }}>
                    <span>Hey, Alex!</span>
                  </h3>
                  <Button
                    variant="contained"
                    disabled
                    className="classes.button"
                    color="success"
                    startIcon={
                      <HistoryToggleOffIcon style={{ fontSize: 25 }} />
                    }
                    style={{ backgroundColor: "#ff2e2e", color: "white" }}
                  >
                    {" "}
                    09 HOURS<br></br>
                    REMAINING
                  </Button>
                </div>
                <hr style={{width: "80%"}}/>
                <BsFire className="icon" color="red" />
                <span>
                  You're on a roll! You've completed{" "}
                  <strong style={{ color: "#D65354" }}>
                    3 consecutive daily challenges
                  </strong>{" "}
                  this week. Keep it up!
                </span>
                <hr style={{width: "80%"}}/>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => {
                        const isAfterFriday =
                          index > rows.findIndex((r) => r.day === "Friday");
                        const isDisabled =
                          (isAfterFriday ||
                            row.day === "Saturday" ||
                            row.day === "Sunday") &&
                          row.replay === undefined;

                        return (
                          <TableRow
                            key={row.day}
                            style={isDisabled ? disabledRowStyles : {}}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              backgroundColor:
                                row.day === "Friday" ? "#90ee90" : "inherit",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.day}
                            </TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.replay}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="dashSection">
              <div className="profileInfo" style={{ textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3>
                    <strong>Here are your daily challenges:</strong>
                  </h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AiFillStar
                      size={38}
                      color="#f7d154"
                      style={{
                        left: "-25px",
                        top: "1px",
                      }}
                    />
                    <div
                      style={{
                        width: "200px",
                        height: 30,
                        backgroundColor: "#eee",
                        position: "relative",
                        borderRadius: "15px",
                      }}
                    >
                      <div
                        style={{
                          width: `${33}%`,
                          height: "100%",
                          backgroundColor: "#A6EB99",
                          borderRadius: "15px",
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "100%",
                          color: "black",
                          fontSize: "14px",
                        }}
                      >
                        <strong> 150 / 450 </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="dashSection">
              <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ margin: "0", marginLeft: "auto" }}>
                    <span>Chess</span>
                  </h3>
                  <InfoIcon />
                </div>
              </div>
              <hr style={{ width: "90%" }} />
              <div>
                <img src={chess} style={{ width: 200, height: 200 }}></img>
              </div>
              <div style={{ marginTop: 55 }}>
                <Button
                  variant="contained"
                  className="classes.button"
                  color="success"
                  endIcon={<DoneIcon />}
                >
                  Completed
                </Button>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button
                  variant="contained"
                  className="classes.button"
                  endIcon={<ReplayIcon />}
                >
                  Replay
                </Button>
              </div>
            </Col>
            <Col className="dashSection">
              <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ margin: "0", marginLeft: "auto" }}>
                    <span>Crossword</span>
                  </h3>
                  <InfoIcon />
                </div>
              </div>
              <hr style={{ width: "90%" }} />
              <div style={{ height: "250px" }}>
                <img src={crossword} style={{ width: 200, height: 200 }}></img>
              </div>
              <div>
                <Button
                  variant="contained"
                  className="classes.button"
                  color="success"
                  endIcon={<EastIcon />}
                  style={{ backgroundColor: "#ed7014" }}
                >
                  Continue
                </Button>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button
                  variant="contained"
                  className="classes.button"
                  endIcon={<RestartAltIcon style={{ fontSize: 25 }} />}
                  style={{ backgroundColor: "#ff2e2e" }}
                >
                  Restart
                </Button>
              </div>
            </Col>
            <Col className="dashSection">
              <div className="dashSectionHeader" style={{ textAlign: "left" }}>
                <div
                  ref={ref}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ margin: "0", marginLeft: "auto" }}>
                    <span>Tower of Hanoi</span>
                  </h3>
                  <InfoIcon />
                </div>
              </div>
              <hr style={{ width: "90%" }} />
              <div style={{ height: "250px" }}>
                <img src={crossword} style={{ width: 200, height: 200 }}></img>
              </div>
              <div>
                <Button
                  variant="contained"
                  className="classes.button"
                  color="success"
                  endIcon={<PlayArrowIcon />}
                >
                  Play
                </Button>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button
                  variant="contained"
                  className="classes.button"
                  sx={{ border: 1 }}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  <strong> Choose difficulty</strong>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
