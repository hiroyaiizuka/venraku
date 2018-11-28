import React, { Component } from 'react';
import { Dimensions, Text, View, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Table, TableWrapper,Cell,  Col, Cols } from 'react-native-table-component';
import Swiper from 'react-native-swiper'
import { Card} from 'react-native-elements'
import Table3Screen from './Table3Screen'

const { width } = Dimensions.get('window')

class Severe5Screen extends React.Component{    
    state = {
        tableTitle: ['vena contracta 幅 (cm)','　カラージェット面積 (cm2)', '肝静脈波形', '逆流弁口面積 (cm2)',
        '逆流量 (ml)', '右房、右室サイズ', '下大静脈径 (cm)' ],
        tableData: [
          ['軽度', '< 0.3','','収縮期波優位','拡張早期', '<30', '通常正常', '<2'],
          ['中等度', '0.3 - 0.69','','収縮期波減高','拡張早期', '30 - 59', '正常-軽度拡大', '2.1 - 2.5'],
          ['重度', '> 0.7','> 10','収縮期逆流波', '全拡張期', '≧ 60', '通常拡大', '> 2.5'],
        ]
    }
    

    static navigationOptions = ({navigation}) =>{
        const {state} = navigation
        return {
            title: '重症度評価',
            headerStyle: { backgroundColor : 'rgb(114,95,70)'},
            headerTintColor: "#fff",
            headerRight: 
            <View> 
                <TouchableOpacity style = {{paddingRight:15}} onPress={() => state.params.handleCcr()}> 
                    <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}> 治療 </Text> 
                </TouchableOpacity> 
            </View>,
            headerTitleStyle: {
                width: '85%',
                textAlign: 'center',
                color: '#fff'
            },
        }
    }


    componentDidMount(){
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Trtreat')})
    }
    
    
    render(){
        const state = this.state;

        return(
            
        <ScrollView style={styles.container}>
            <Card title = '一次性TR   vs   機能性TR' containerStyle={{marginBottom: 20}}>
                <Text style={{marginBottom: 2, marginTop:10, fontSize: 14}}> 弁尖自体に障害を持つ、   一次性TRと </Text>
                <Text　style={{marginBottom: 20, fontSize: 14}}> 弁尖自体には障害のない、機能性TRに二分される。 </Text>
                <Text style={{marginBottom: 2,  fontSize: 14}}> 機能性TRは、弁輪拡大が主な原因であるが、</Text>
                <Text style={{marginBottom: 2,  fontSize: 14}}> 特に、心房細動、左心不全と肺高血圧の合併が</Text>
                <Text style={{marginBottom: 20,  fontSize: 14}}> 重要である。</Text>
                <Text style={{marginBottom: 2,  fontSize: 14}}> 頻度は圧倒的に機能性が多く、約9割を占める。</Text>
                <Table3Screen/>
                <Text style={{fontSize: 7, marginTop:20,textAlign: 'right'}}>2017 ESC/EACTS Guidelines for the management of valvular heart disease</Text>  
            </Card>

           <Card title = '心エコーによる評価' containerStyle={{marginBottom: 20}}>
               
                <Text style={{marginBottom: 20, marginTop: 12, fontSize: 14}}>心エコーでは、逆流の重症度に加えて下記を行う。</Text>
                <Text style={{marginBottom: 2, fontSize: 14}}>(1)三尖弁輪径の評価</Text>
                <Text style={{marginBottom: 2, fontSize: 14}}>(2)右室・右房・下大静脈の大きさの評価</Text>
                <Text style={{marginBottom: 2, fontSize: 14}}>(3)肺高血圧の評価 </Text>
                <Text style={{marginBottom: 20, fontSize: 14}}>(4)基礎疾患の診断</Text>

                <Text style = {{fontSize: 7, marginTop: 10, left: 184}}>循環器超音波検査の適応と判読ガイドライン</Text>
           </Card>

           <Card title = '三尖弁閉鎖不全症の重症度基準' containerStyle={{marginBottom: 40, paddingBottom: 25}}>
                <Text style={{marginBottom: 2, marginTop:10, fontSize: 14}}>日常的によく用いられる方法として</Text>
                <Text style={{marginBottom: 2,  fontSize: 14}}>右房を3等分し、逆流ジェットの到達度によって</Text>
                <Text style={{marginBottom: 30,  fontSize: 14}}>重症度を評価するものである。</Text>
                <Text style={{marginBottom: 20,  fontSize: 14}}>逆流ジェットが、右房内三尖弁側1/3以内にある場合を軽度，2/3までを中等度，それ以上を高度とする。</Text>
                           
            <View style={styles.container}>
                <Table style={{flexDirection: 'row'}}>
                {/* Left Wrapper */}
                <TableWrapper style={{width: 100}}>
                    <Cell data="" style={styles.singleHead}/>
                    <TableWrapper style={{flexDirection: 'row'}}>
                    <Col data={['定性評価', '定量評価', 'その他']} style={styles.head} heightArr={[95, 60,60 ]} textStyle={styles.text} />
                    <Col data={state.tableTitle} style={styles.title} heightArr={[30, 35,30,30,30, 30, 30, 30, 30]} textStyle={styles.titleText}></Col>
                    </TableWrapper>
                </TableWrapper>
        
                {/* Right Wrapper */}
                <TableWrapper style={{flex:1}}>
                    <Cols data={state.tableData} heightArr={[40, 30, 35, 30, 30, 30, 30, 30]} textStyle={styles.text2}/>
                </TableWrapper>
                </Table>
                <Text style={{fontSize: 7, marginBottom: 2, marginTop: 20, left: 180}}>{"\n"}  弁膜疾患の非薬物療法に関するガイドライン </Text>  
                <Text style = {{fontSize: 7, left: 6}}>2017 ASE, Recommendations for Noninvasive Evaluation of
Native Valvular Regurgitation</Text>
            </View>
           
           </Card>
           
          </ScrollView>
        )
      
    }
}

     
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
  wrapper: {
    marginBottom: 600
},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    
  },
  image: {
    width,
    flex: 1
  },
  singleHead: { width: 100, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 0.5, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right', fontSize: 9 },
  text: { textAlign: 'center', fontSize: 11 },
  text2: { textAlign: 'center', fontSize: 10 },
  });


export default Severe5Screen;