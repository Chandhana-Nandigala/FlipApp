import React from 'react';
import {View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {data} from './constants/data'
import FlipCard from 'react-native-flip-card';

import { styles } from './styles/main';

const App = () => {

  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationView}>
        <Text style={[styles.paginationText, {fontWeight:'400'}]}>
          <Text style={[styles.paginationText, {fontWeight:'bold'}]}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* <Text>hello</Text> */}
      <Swiper 
      style={styles.swipeWrapper}
      showsButtons
      renderPagination={renderPagination}
      buttonWrapperStyle={styles.btns}
      pagingEnabled
      height={'80%'}
      loadMinimalLoader
      loadMinimalSize={1}
      >
       {data.map((item) => (
        <FlipCard key={item.id} 
        friction={100}
        perspective={1000}
        flipVertical
        style={styles.views}
        >
          <View style={styles.FrontView}>
            <Text style={styles.frontText} >{item.text}</Text>
          </View>
          <View style={styles.FrontView}>
            <Image source={item.img} height={100} width={100} />
            <Text style={styles.backText}>{item.backText}</Text>
          </View>
        </FlipCard>
        ))}
      </Swiper>
    </View>
  )
}
export default App;