import React, { SetStateAction, useCallback } from 'react';
import { View, Text, Alert } from 'react-native';
import Animated, { Layout } from 'react-native-reanimated';
import * as Clipboard from 'expo-clipboard';

import { useToast } from '@contexts/ToastContext';

import Tag from '../Tag';
import IconButton from '../IconButton';
import { styles } from './styles';

interface iTagsProps {
  tags: string[];
  setTags: (tags: SetStateAction<string[]>) => void;
}

const Tags: React.FC<iTagsProps> = ({ setTags, tags }) => {
  const { toast } = useToast();

  const handleCopyToClipboard = useCallback(() => {
    const formatedTags = tags.toString().replaceAll(',', ' ');

    Clipboard.setStringAsync(formatedTags)
      .then(() => toast('Copiado!'))
      .catch(() => toast('Não foi possível copiar!'));
  }, [tags, toast]);

  const handleRemoveTag = useCallback(
    (tag: string) => {
      Alert.alert('Remover Tag', `Remover a tag "${tag}"?`, [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () =>
            setTags((prevState) => prevState.filter((item) => item !== tag)),
        },
      ]);
    },
    [setTags]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{tags.length} tags</Text>
        <IconButton iconName="content-copy" onPress={handleCopyToClipboard} />
      </View>
      <Animated.View style={styles.content} layout={Layout}>
        {tags.map((tag, index) => (
          <Tag key={index} title={tag} onPress={() => handleRemoveTag(tag)} />
        ))}
      </Animated.View>
    </View>
  );
};

export default Tags;
