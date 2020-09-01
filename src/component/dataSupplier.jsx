import React from "react";
import "./style/index.scss";
import icoSearch from "./img/logistik/IcoSearch.svg";
import icoEdit from "./img/logistik/IcoEdit.svg";
import arrowNext from "./img/logistik/arrow-next.svg";
import arrowPrev from "./img/logistik/arrow-prev.svg";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class DataSupplier extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        <div className="dataSupplier">
          <h1 className="dataTitle">Data Supplier</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/Logistik">Logistik</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Data Supplier
              </li>
            </ol>
          </nav>
          <Row className="">
            <Col className="col-md-6">
              <form action="#" method="post">
                <input
                  type="text"
                  className="form-control search"
                  placeholder="Cari..."
                />
                <img src={icoSearch} alt="search" className="icoSearch" />
              </form>
            </Col>
            <Col className="col-md-6">
              <Link to="/AddDataSupplier">
                <a href="" className="btn btn-custom1">
                  Tambah Data
                </a>
              </Link>
            </Col>
          </Row>

          <div className="cardTable">
            <table className="table table-striped">
              <thead className="border-top-0">
                <tr>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Opsi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PT. Bansos Indonesia</td>
                  <td>
                    Jl. Batuakik, Desa Rora, Kec Klojen, Kota Malang 66284
                  </td>
                  <td>
                    <Link to="/EditDataSupplier">
                      <a href="#" class="btn btn-warning edit">
                        <img src={icoEdit} alt="edit" className="icoOption" />
                      </a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>PT. Bansos Indonesia</td>
                  <td>
                    Jl. Batuakik, Desa Rora, Kec Klojen, Kota Malang 66284
                  </td>
                  <td>
                    <a href="#" class="btn btn-warning edit">
                      <img src={icoEdit} alt="edit" className="icoOption" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>PT. Bansos Indonesia</td>
                  <td>
                    Jl. Batuakik, Desa Rora, Kec Klojen, Kota Malang 66284
                  </td>
                  <td>
                    <a href="#" class="btn btn-warning edit">
                      <img src={icoEdit} alt="edit" className="icoOption" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a href="" class="arrowPrev">
                    <img src={arrowPrev} alt="prev" className="icoPage" />
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a href="" class="arrowNext">
                    <img src={arrowNext} alt="next" className="icoPage" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    );
  }
}

export default DataSupplier;