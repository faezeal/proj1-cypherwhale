import React, { useState } from "react";
import CourseCard from "./CourseCard";
import './Courses.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPaginate from "react-paginate";

// داده ها بدین شکل باشند
const Data = [
  {
    category: "forex",
    lesson: "کیف1 پول تراست ولت",
    image: "",
    id: "sss",
    time: "3",
    level: "1",
    date: "1400/5/2",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "coin",
    lesson: "ارز های نو",
    image: "",
    id: "sss2",
    time: "4",
    level: "2",
    date: "1400/6/2",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "discentraland",
    lesson: "کیف پول کوینومی",
    image: "",
    id: "sss3",
    time: "5",
    level: "3",
    date: "1400/5/2",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "nft",
    lesson: "چنگالهای اندروز",
    image: "",
    id: "sss4",
    time: "6",
    level: "1",
    date: "1400/5/2",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "nft",
    lesson: "شمع های ژاپنی",
    image: "",
    id: "sss5",
    time: "4",
    level: "3",
    date: "1400/12/12",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "forex",
    lesson: "فیبونانچی",
    image: "",
    id: "sss6",
    time: "3",
    level: "2",
    date: "1400/5/2",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "stock",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "stock",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "stock",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "stock",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "stock",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "stock",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "stock",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "nft",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "nft",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "stock",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
  {
    category: "coin",
    lesson: "ایچیموکو",
    image: "",
    id: "sss7",
    time: "6",
    level: "1",
    date: "1400/5/22",
    article:
      "درود بر شما  ای انسان بزرگ و فرهیخته و همچنان لازم است اشاره کنم هر انچه که لازم است بیابید",
  },
];

export default function Courses() {
  const [page, setPage] = useState(1);
  return (
    
    <Row  className='Cards'>
      {Data.slice((page - 1) * 10, (page - 1) * 10 + 10).map((node) =>(<Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
        <CourseCard key={node.id} data={node} />
        </Col>))}
        <Row>
        <Col xl={12} lg={12} md={12} sm={12}>
        <ReactPaginate
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            scrollBehavior: "smooth",
            backgroundColor: "red"
          }}
          breakLabel="..."
          nextLabel=">"
          pageCount={(Data.length / 10).toFixed(0)}
          onPageChange={(event) => {
            setPage(event.selected+1);
            console.log(event.selected)
            window.scroll(0, 0);
          }}
          color="secondary"
          previousLabel=" <"
          renderOnZeroPageCount={null}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
        </Col>
        </Row>
          </Row>
     
    
  );
}
