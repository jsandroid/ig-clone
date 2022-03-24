import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  )
}

const PostHeader = ({ post }) => {
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.profile} source={{ uri: post.profile_pic }} />
          <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>{post.user}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{ color: 'white', marginRight: 5, fontWeight: '900' }}>...</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const PostImage = ({ post }) => {
  return (
    <View>
      <Image style={styles.postImg} source={{ uri: post.imgUrl }} />
    </View>
  )
}

const PostFooter = ({ post }) => {
  return (
    <View>
      <FooterIcons post={post} />
      <View style={{paddingTop: 10}}>
        <View>
          <Text style={{color: 'white', fontWeight: '500'}}><Text style={{fontWeight: '700'}}>{post.likes}</Text> Likes</Text>
        </View>
        <View style={{paddingTop: 5}}>
          <Text style={{color: 'white', fontWeight: '500'}}><Text style={{fontWeight: '700'}}>{post.user}</Text>  {post.caption}</Text>
        </View>
        {post.comments.map((comment, index) => (
          <View key={index} style={{paddingTop: 3}}>
            <Text style={{color: 'white', fontWeight: '500'}}><Text style={{fontWeight: '700'}}>{comment.user}</Text>  {comment.comment}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const FooterIcons = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved]  = useState(false)
  const emptyHeart = require('../../assets/heart.png')
  const filledHeart = require('../../assets/heart-on.png')
  const bookmark = require('../../assets/bookmark.png')
  const bookmarkOn = require('../../assets/bookmark-on.png')
  
  return(
    
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 100}}>
      <TouchableOpacity onPress={() => setLiked(!liked)}>
        <Image
          style={styles.icon}
          source={(liked)? filledHeart : emptyHeart}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../../assets/messenger.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../../assets/send-message.png')}
        />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity onPress={() => setSaved(!saved)}>
        <Image
          style={styles.icon}
          source={(saved)? bookmarkOn : bookmark}
        />
      </TouchableOpacity>
    </View>
  </View>
  )
}




export default Post

const styles = StyleSheet.create({
  profile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: 'limegreen'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  postImg: {
    width: '100%',
    height: 400,
    marginBottom: 8
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  iconCenter: {
    width: 23,
    height: 23,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
})