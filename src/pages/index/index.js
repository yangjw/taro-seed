import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from './actions'

import './index.less'


@connect(({ counter }) => ({
  counter
}), {
  add,
  minus,
  asyncAdd
})
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
    console.log(1)
  }

  componentDidShow() {
  }

  componentDidHide() {
  }
  static goLink(){
    // 跳转到目的页面，在当前页面打开
    Taro.navigateTo({
      url: '/pages/page2/index'
    })
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.minus}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View onClick={Index.goLink}><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
