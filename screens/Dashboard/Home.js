import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import { Flatlist } from "react-native-gesture-handler";

import { IconButton, TextButton, VerticalCourseCard, LineDivider } from "../../components";
import{COLORS, FONTS, SIZES, icons, images, dummyData} from "../../constants";


const Section = ({containerStyle, title, onPress, children}) =>{
  return(
    <View
      style={{
        ...containerStyle
      }}
    >
      <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding
      }}
      >
        <Text
        style={{
            flex: 1, 
            ...FONTS.h2
        }}
        >
         {title}
        </Text>
         
         <TextButton
           contentContainerStyle={{
            width: 80,
            borderRadius: 30,
            backgroundColor: COLORS.primary
           }}
           label="See All"
           onPress={onPress}
         />
      </View>
    </View>
  )
}

const Home = () => {

  function renderHeader(){
    return(
       <View
         style={{
              flexDirection: 'row',
              marginTop: 40,
              marginBottom: 10,
              paddingHorizontal: SIZES.padding,
              alignItems: 'center'
         }}
       >
          {/* Greetings */}
          <View
            style={{
              flex: 1
            }}
          >
           <Text style={{ ...FONTS.h2}}> Hello, Programmers</Text>
           <Text
           style={{
            color: COLORS.gray50,
            ...FONTS.body3
           }}
           >
              Thursday, 9th Sept 2023
           </Text>
          </View>

          {/* Notification */}
          <IconButton
                icon={icons.notification}
                iconStyle={{
                  tintColor: COLORS.black
                }}
          
          />
       </View>
    )
  }

  function renderStartLearning(){
    return(
      <ImageBackground
      source={images.featured_bg_image}
      style={{
        alignItems: 'flex-start',
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        padding: 15
      }}
      imageStyle={{
        borderRadius: SIZES.radius
      }}
      >

       {/* Info */}
        <View>
             <Text
             style={{
                 color: COLORS.white,
                 ...FONTS.body2
             }}
             >
              HOW TO
             </Text>
             <Text
                 style={{
                    color: COLORS.white,
                    ...FONTS.h2
             }}
             >
              Make your barand more visible with our checklist
             </Text>
             <Text
                 style={{
                     marginTop: SIZES.radius,
                     color: COLORS.white,
                     ...FONTS.body2
                        }}
             >
              By Scott Harris
             </Text>
        </View>

       {/* Image */}
      <Image
          source={iamge.start_learning}
          style={{
            width:'100%',
            height: 110,
            marginTop: SIZES.padding
          }}
      />

      {/* Button */}
       <TextButton 
       label="Start Learning"
       contentContainerStyle={{
        height: 40,
        paddingHorizontal: SIZES.padding,
        borderRadius: 20,
        backgroundColor: COLORS.white
       }}
       labelStyle={{
        color: COLORS.black
       }}
       />
      </ImageBackground>
    )
  }

  function renderCourses(){
    return(
      <Flatlist 
      marginHorizontal
      data={dummyData.courses_list_1}
      listKey="Courses"
      keyExtractor={item => 'Courses-${item.id}'}
      showHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop:SIZES.padding
      }}
      renderItem={({item, index}) => (
         <VerticalCourseCard 
         containerStyle={{
         marginLeft: index == 0? SIZES.padding :
         SIZES.radius,        
         marginRight: index == dummyData.courses_list_1.length - 1? SIZES.padding : 0
         }}
         course={item}
         />
      )}
      />
    )
  }
  
  function renderCategories() {
    return(
       <Section
          title="Categories"
       >
        <Flatlist 
           horizontal
           data={dummyData.categories}
           listKey="Categories"
           keyExtractor={item => 'Categories-${item.id}'}
           showHorizontalScrollIndicator={false}
           contentContainerStyle={{
            marginTop: SIZES.radius
           }}
           renderItem={({item, index}) =>(
            
           )}
        />
       </Section>      
    )
  }
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: COLORS.white
    }}
    >

     {/* Header */}
      {renderHeader()}

     {/* content */}
     <ScrollView
     contentContainerStyle={{
      paddingBottom: 150
     }}
     showsVerticalScrollIndicator={false}
     >
       {/* Start Learning */}
       {renderStartLearning()}

       {/* Courses */}
       {renderCourses()}

       <LineDivider 
       lineStyle={{
        marginVertical: SIZES.padding
       }}
       />


       {/*Categireis*/}
       {renderCategories()}
     </ScrollView>
    </View>
  );
};

export default Home;
