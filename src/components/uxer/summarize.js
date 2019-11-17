import React from 'react'
import { Row, Col } from 'reactstrap'
import { Table } from '@material-ui/core'
import { Pie, HorizontalBar } from 'react-chartjs-2'

import '../../static/sass/uxer/summarize.scss'

class Summarize extends React.Component {
  data = (option, results, type_form) => {
    let data = {}
    if (type_form === 'multiple') {
    data = {
      labels: option,
      datasets: [{
        data: results,
        backgroundColor: [
          '#FF6384', '#ff8364', '#FFCE56', '#36A2EB', '#7f78d2',
          '#e8647c', '#ff8080', '#ffd369', '#52de97', '#51dacf',
          '#4BC0C0', '#2d3561', '#540e33', '#de356a', '#fc7fb2',
        ],
      }],
    }
    } else if (type_form === 'checkbox') {
      data = {
        labels: option,
        datasets: [
          {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: results
          }
        ]
      }
    }
    return data
  }

  render() {
    const { projectName, avgTime, result } = this.props

    return (
      <section id='summarize'>
        {result &&
          <>
            <Row className='summary-block'>
              <Col xs={12}>
                <br />
                <Row className='justify-content-center'>
                  <Col xs={10} className='space-side '>
                    <h1>{projectName} Summarize</h1>
                  </Col>
                </Row>
                <br />
                <Row className='justify-content-center'>
                  <Col xs={10}>
                    <Row className='align-items-center'>
                      <Col xs={12} md={4} lg={3} >
                        <p className='title-head'>Average Time Test : </p>
                      </Col>
                      <Col xs={12} md={8} lg={9}>
                        <p className='avg-time'>{result.allExper <= 1 ? 'No Average' : avgTime}</p>
                      </Col>
                    </Row>
                    <Row className='align-items-center'>
                      <Col xs={12} md={4} lg={3} >
                        <p className='title-head'>Number of Note : </p>
                      </Col>
                      <Col xs={12} md={8} lg={9}>
                        {result.allExper <= 1 ? (
                          <p>{`${result.takeNoteExper} / ${result.allExper} person`}</p>
                        ) : (
                            <p>{`${result.takeNoteExper} / ${result.allExper} persons`}</p>
                          )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr />
                {result.takeNoteExper !== 0 && result.summary.map(result => (
                  <>
                    <Row className='justify-content-center'>
                      <Col xs={10}>
                        <p className='title-head'>{result.question}</p>
                        {result.type_form === 'textbox' ? (
                          <Row>
                            <Col xs={12}>
                              <Table className='table table-fixed'>
                                <tbody>
                                  {result.answer.map(answer => (
                                    <tr>
                                      <td className='table-col'>{answer}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                        ) : (
                            <Row className='justify-content-start'>
                              <Col xs={12}>
                                {result.type_form === 'multiple' ? (
                                  <Pie
                                    data={this.data(result.options, result.answer, 'multiple')}
                                    legend={{
                                      position: 'bottom',
                                    }}
                                    width={100}
                                    height={35}
                                  />

                                ) : (
                                    <HorizontalBar
                                      data={this.data(result.options, result.answer, 'checkbox')}
                                      width={100}
                                      height={35}
                                    />
                                  )}
                              </Col>
                            </Row>
                          )}
                      </Col>
                    </Row>
                    <br />
                  </>
                ))}
              </Col>
            </Row>
          </>
        }
      </section>
    )
  }
}

export default Summarize