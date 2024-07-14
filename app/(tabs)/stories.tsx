import { Link, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};
//const router = useRouter();

const Item = ({title}: ItemProps) => (
  <TouchableOpacity style={styles.storyItem}>
    <Text style={styles.title}>{title}</Text>
    <Link href={{pathname: 'editor'}}>Edit</Link>
  </TouchableOpacity>
);

function StoryItem(props: ItemProps) {
  return (
    <Item title={props.title}></Item>
  );
}

export default function DetailsScreen() {

  const [stories, setStories] = useState([]);

  useEffect(() => {
      getStories();
  }, []);

  const getStories = () => {
    const url = "";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((s) => {
        setStories(s);
      });
  };

  return (
    <SafeAreaView>
      <FlatList data={DATA} renderItem={({item}) => <StoryItem title={item.title}/> }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  storyItem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});