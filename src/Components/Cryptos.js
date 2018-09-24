import React, { Component } from "react";
import { Accordion, Col, Grid, ListGroup, ListGroupItem, Panel, Row } from "react-bootstrap";

class Cryptos extends Component {

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  
  render() {
    let cryptoItems;
    let { data } = this.props;

    if (data.cryptos) {
      cryptoItems = data.cryptos.map(crypto => {
        let id = crypto.id;
        let name = crypto.name;
        let symbol = crypto.symbol;
        let rank = crypto.rank;
        let price = crypto.price_usd;
        let marketCap = this.numberWithCommas(Number(crypto.market_cap_usd).toFixed(0));
        let percentChange24h = crypto.percent_change_24h;
        let header = rank + '. ' + name + ' (' + symbol + '): $' + this.numberWithCommas(Number(price).toFixed(2));

        return (
          <Panel key={id} header={header} eventKey={id}>
            <Grid>
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <ListGroup>
                    <ListGroupItem><strong>Market Capitalization: </strong>${marketCap}</ListGroupItem>
                    <ListGroupItem><strong>% Change (24h): </strong>{percentChange24h}%</ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Grid>
          </Panel>
        )
      });
    }

    return (
      <div>
        <Accordion>
          {cryptoItems}
        </Accordion>
      </div>
    );
  }
}

export default Cryptos;
