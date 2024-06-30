import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customTextInput";

const EditNote = ({ setCurrentPage, editNote, currentNote }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  
  useEffect(() => {
    if (currentNote) {
        setTitle(currentNote.title);
        setDesc(currentNote.desc);
    }    
  }, [currentNote]);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Ubah Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
       <CustomButton
          backgroundColor="#247881"
          color="white"
          text="Simpan"
          width="100%"
          // Jalankan function editNote dan arahkan kembali layar ke Home
          onPress={() => {
            editNote(currentNote.id, title, desc)
            setCurrentPage('home')
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
})

export default EditNote