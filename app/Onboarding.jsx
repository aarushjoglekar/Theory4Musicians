import { View, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import OnboardingScreens from "../constants/OnboardingScreens";
import OnboardingItem from "../components/OnboardingItem";
import Paginator from "../components/Paginator";
import NextButton from "../components/NextButton";
import { router } from "expo-router";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const scrollTo = () => {
    if (currentIndex < OnboardingScreens.length - 1){
       slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
    } else { 
      router.navigate('/home')
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={OnboardingScreens}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slidesRef}
        />
      </View>
      <Paginator data={OnboardingScreens} scrollX={scrollX} />
      <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / OnboardingScreens.length)}/>
    </View>
  );
}
