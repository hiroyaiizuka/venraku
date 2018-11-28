import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
 
export default class Table3Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', '原因'],
      tableTitle: ['一次性', '二次性'],
      tableData: [
        ['リウマチ熱、感染性心内膜炎、逸脱、外傷　ペースメーカーリード、薬剤、放射線　Ebstein奇形、粘液変性、カルシノイド'],
        ['心房細動、肺高血圧、拡張型心筋症\n心房中隔欠損症、不整脈原性右室心筋症\n肺動脈弁狭窄、右室梗塞、心臓腫瘍'],
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table>
          <Row data={state.tableHead} flexArr={[1, 5]} style={styles.head} textStyle={styles.texttitle}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[75,75]} textStyle={styles.texttitle}/>
            <Rows data={state.tableData} flexArr={[2, 3,]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 20, marginTop: 20,backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#c8e1ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1.02, backgroundColor: '#c8e1ff' },
  row: {  height: 75  },
  text: { paddingLeft:10, fontSize: 12, lineHeight: 18,},
  texttitle: { textAlign: 'center', fontSize: 12 }
});