import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { gsap, Power3 } from "gsap";
import { useRef } from "react";
import { Accordion, Badge, ListGroupItem } from "react-bootstrap";
import "./CourseCard.css";

export default function CourseCard({ data }) {
  const [expanded, setExpanded] = useState(false);
  const FavoriteRef = useRef(null);

  const handleExpandClick = () => {
    console.log(expanded);
    setExpanded(!expanded);
    if (expanded) {
      console.log(expanded, "line80");
      gsap.to(targetedComponent_2, 2, { width: "100%", ease: Power3.easeOut });
      console.log(targetedComponent_2.style.width, "line80");
    } else {
      gsap.to(targetedComponent_2, 2, { width: "2%", ease: Power3.easeOut });
    }
  };
  const favouritIconHandler = () => {
    if (FavoriteRef.current.style.color === "red") {
      FavoriteRef.current.style.color = "#999";
    } else {
      FavoriteRef.current.style.color = "red";
    }
  };
  let targetedComponent_2 = useRef(null);

  return (
    <Card elevation={1} className="mainCard">
      <Card.Header
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: "60px",
        }}
      >
        <Badge style={{ height: "35px", width: "40px", marginRight: "15px" }}>
          {data.category === "discentraland" ? (
            <i
              class="bi bi-wallet2"
              style={{ textAlign: "center", fontSize: "20px" }}
            ></i>
          ) : data.category === "coin" ? (
            <i
              class="bi bi-currency-bitcoin"
              style={{ textAlign: "center", fontSize: "20px" }}
            ></i>
          ) : data.category === "forex" ? (
            <i
              class="bi bi-graph-down"
              style={{ textAlign: "center", fontSize: "20px" }}
            ></i>
          ) : data.category === "nft" ? (
            <i
              class="bi bi-palette"
              style={{ textAlign: "center", fontSize: "20px" }}
            ></i>
          ) : (
            <i
              class="bi bi-currency-dollar"
              style={{ textAlign: "center", fontSize: "20px" }}
            ></i>
          )}
        </Badge>
        <div>
          <Card.Title>
            <h3 style={{ fontSize: "18px" }}>
              {" "}
              {data.category === "coin"
                ? "ارز"
                : data.category === "forex"
                  ? "فارکس "
                  : data.category === "nft"
                    ? "ان اف تی"
                    : data.category === "stock"
                      ? "سهام"
                      : "دیسنترالند"}
            </h3>
          </Card.Title>
          <Card.Subtitle>
            {<h6 className="subtitle"> {data.lesson}</h6>}
          </Card.Subtitle>
        </div>

        <i
          style={{ flexGrow: "1", color: "#999" }}
          onClick={favouritIconHandler}
          ref={FavoriteRef}
          class="bi bi-heart-fill"
        ></i>
      </Card.Header>
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL + "/assets/img/trade.jpg"}`}
      />

      <Card.Body>
        <ListGroup
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ListGroupItem
            style={{
              width: "40%",
              border: "none",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "baseline",
              flexShrink: "0",
            }}
          >
            <span>
              <h6 className="ListItemText ms-xs-2 ms-sm-2">
                {" "}
                {data.level === "1"
                  ? "اسان"
                  : data.level === "2"
                    ? "متوسط"
                    : "سخت"}
              </h6>
            </span>{" "}
            <span className="ListItemIcon ">
              <i class="bi bi-bar-chart-line"></i>
            </span>
          </ListGroupItem>
          <ListGroupItem
            style={{
              width: "40%",
              border: "none",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "baseline",
            }}
          >
            <span className="ListItemText">
              <h6 className="ListItemText ms-4 "> {data.date}</h6>{" "}
            </span>
            <span className="ListItemIcon">
              <i class="bi bi-calendar-event"></i>
            </span>
          </ListGroupItem>
          <ListGroupItem
            style={{
              width: "20%",
              border: "none",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "baseline",
            }}
          >
            <span className="ListItemText">
              <h6 className="ListItemText ms-sm-4 "> {data.time}'</h6>{" "}
            </span>
            <span className="ListItemIcon">
              <i class="bi bi-clock"></i>
            </span>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>

      <Card.Footer className="cardActions bg-primary">
        <Accordion>
          <Accordion.Header className="acoordion" bsPrefix="accordion-Header">
            {" "}
          </Accordion.Header>
          <Accordion.Body>
            <ReactPlayer
              url={`${process.env.PUBLIC_URL + "/assets/clip/Kukoin.mp4"}`}
              className="videopPlayer"
              controls={true}
              width={"100%"}
              stopOnUnmount={true}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload", //<- this is the important bit
                  },
                },
              }}
            />
            <p className="explanation">{data.article}</p>
          </Accordion.Body>
        </Accordion>
      </Card.Footer>
    </Card>
  );
}
