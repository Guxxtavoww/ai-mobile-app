import React, { useState, useCallback, useRef } from 'react';
import { ScrollView, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useToast } from '@contexts/ToastContext';
import {
  Button,
  Header,
  IconButton,
  Tags,
  Input,
  Modal,
  TextArea,
} from '@components/index';

import { styles } from './styles';
import { fetchTags } from './api/details.api';
import { formatTags } from './utils';

const DetailsScreen: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [collectionName, setCollectionName] = useState('Tags');
  const [isModalFormVisible, setIsModalFormVisible] = useState(false);

  const tagsInputRef = useRef<TextInput>(null);

  const { toast } = useToast();

  const handleFetchTags = useCallback(async () => {
    setIsLoading(true);

    await fetchTags(description)
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        const formatedTags = formatTags(data.choices[0].text);
        setTags(formatedTags);
      })
      .catch((err) => {
        toast(`Erro: ${err.message}`);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, [description]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={collectionName}>
        <IconButton
          iconName="edit"
          onPress={() => setIsModalFormVisible(true)}
        />
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TextArea
            placeholder="Sobre qual assunto você deseja gerar tags?"
            onChangeText={setDescription}
            value={description}
            onClear={() => {
              tagsInputRef.current?.clear();
              setDescription('');
            }}
            editable={!isLoading}
            ref={tagsInputRef}
          />
          <View style={styles.options}>
            <Button
              title="Gerar tags"
              onPress={handleFetchTags}
              isLoading={isLoading}
            />
          </View>
        </View>
        <Tags tags={tags} setTags={setTags} />
      </ScrollView>
      <Modal
        visible={isModalFormVisible}
        onClose={() => setIsModalFormVisible(false)}
        title="Editar nome"
      >
        <Input
          name="collectionName"
          placeholder="Nome da coleção"
          onChangeText={setCollectionName}
          value={description}
          hasMarginBottom
        />
        <Button
          title="Salvar"
          onPress={() => {
            setDescription(collectionName);
            setIsModalFormVisible(false);
            handleFetchTags();
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default DetailsScreen;
