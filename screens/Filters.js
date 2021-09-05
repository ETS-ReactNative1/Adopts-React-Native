import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import AltTopBar from '../components/AltTopBar';
import { useNavigation } from '@react-navigation/core';
import { FilterContext } from '../contexts/FilterContext';
import { Picker } from '@react-native-picker/picker';
import Button from 'react-native-button';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export default function Filters() {


  const {
    fetchAnimals, setAnimalType, 
    setLocation, setAge, 
    animalType, age, gender, setGender, 
    breed, setBreed, darkModeOn
 } = useContext(FilterContext);

  const navigation = useNavigation();

  const handleSubmit = () => {
      setBreed('')
      setAnimalType('')
      setGender('')
      setAge('')
      fetchAnimals()
      navigation.navigate('Main');
    
  }


const dogBreeds = () => {
    return (
    <View>
    <Picker selectedValue={breed} onValueChange={currentBreed => setBreed(currentBreed)} style={darkModeOn ? styles.darkModePickerText : styles.pickerText}>
        <Picker.Item label='Any' value='' />
        <Picker.Item label='Affenpinscher' value='Affenpinscher' />
        <Picker.Item label='Afghan Hound' value='Afghan Hound' />
        <Picker.Item label='Airedale Terrier' value='Airedale Terrier' />
        <Picker.Item label='Akbash' value='Akbash' />
        <Picker.Item label='Akita' value='Akita' />
        <Picker.Item label='Alaskan Malamute' value='Alaskan Malamute' />
        <Picker.Item label='American Bulldog' value='American Bulldog' />
        <Picker.Item label='American Bully' value='American Bullly' />
        <Picker.Item label='American Eskimo Dog' value='American Eskimo Dog' />
        <Picker.Item label='American Foxhound' value='American Foxhound' />
        <Picker.Item label='American Hairless Terrier' value='American Hairless Terrier' />
        <Picker.Item label='American Staffordshire Terrier' value='American Staffordshire Terrier' />
        <Picker.Item label='American Water Spaniel' value='American Water Spaniel' />
        <Picker.Item label='Anatolian Shepherd' value='Anatolian Shepherd' />
        <Picker.Item label='Appenzell Mountain Dog' value='Appenzell Mountain Dog' />
        <Picker.Item label='Aussiedoodle' value='Aussiedoodle' />
        <Picker.Item label='Australian Cattle Dog / Blue Heeler' value='Australian Cattle Dog / Blue Heeler' />
        <Picker.Item label='Australian Kelpie' value='Australian Kelpie' />
        <Picker.Item label='Australian Terrier' value='Australian Terrier' />
        <Picker.Item label='Basenji' value='Basenji' />
        <Picker.Item label='Basset Hound' value='Basset Hound' />
        <Picker.Item label='Beagle' value='Beagle' />
        <Picker.Item label='Bearded Collie' value='Bearded Collie' />
        <Picker.Item label='Beauceron' value='Beauceron' />
        <Picker.Item label='Bedlington Terrier' value='Bedlington Terrier' />
        <Picker.Item label='Belgian Shepherd / Laekenois' value='Belgian Shepherd / Laekenois' />
        <Picker.Item label='Belgian Shepherd / Malinois' value='Belgian Shepherd / Malinois' />
        <Picker.Item label='Belgian Shepherd / Sheepdog' value='Belgian Shepherd / Sheepdog' />
        <Picker.Item label='Belgian Shepherd / Tervuren' value='Belgian Shepherd / Tervuren' />
        <Picker.Item label='Bernedoodle' value='Bernedoodle' />
        <Picker.Item label='Bernese Mountain Dog' value='Bernese Mountain Dog' />
        <Picker.Item label='Bichon Frise' value='Bichon Frise' />
        <Picker.Item label='Black and Tan Coonhound' value='Black and Tan Coonhound' />
        <Picker.Item label='Black Labrador Retriever' value='Black Labrador Retriever' />
        <Picker.Item label='Black Mouth Cur' value='Black Mouth Cur' />
        <Picker.Item label='Black Russian Terrier' value='Black Russian Terrier' />
        <Picker.Item label='Bloodhound' value='Bloodhound' />
        <Picker.Item label='Blue Lacy' value='Blue Lacy' />
        <Picker.Item label='Bluetick Coonhound' value='Bluetick Coonhound' />
        <Picker.Item label='Boerboel' value='Boerboel' />
        <Picker.Item label='Bolognese' value='Bolognese' />
        <Picker.Item label='Border Collie' value='Border Collie' />
        <Picker.Item label='Border Terrier' value='Border Terrier' />
        <Picker.Item label='Borzoi' value='Borzoi' />
        <Picker.Item label='Boston Terrier' value='Boston Terrier' />
        <Picker.Item label='Bouvier des Flandres' value='Bouvier des Flandres' />
        <Picker.Item label='Boxer' value='Boxer' />
        <Picker.Item label='Boykin Spaniel' value='Boykin Spaniel' />
        <Picker.Item label='Briard' value='Briard' />
        <Picker.Item label='Brittany Spaniel' value='Brittany Spaniel' />
        <Picker.Item label='Brussels Griffon' value='Brussels Griffon' />
        <Picker.Item label='Bull Terrier' value='Bull Terrier' />
        <Picker.Item label='Bullmastiff' value='Bullmastiff' />
        <Picker.Item label='Cairn Terrier' value='Cairn Terrier' />
        <Picker.Item label='Canaan Dog' value='Canaan Dog' />
        <Picker.Item label='Cane Corso' value='Cane Corso' />
        <Picker.Item label='Cardigan Welsh Corgi' value='Cardigan Welsh Corgi' />
        <Picker.Item label='Carolina Dog' value='Carolina Dog' />
        <Picker.Item label='Catahoula Leopard Dog' value='Catahoula Leopard Dog' />
        <Picker.Item label='Cattle Dog' value='Cattle Dog' />
        <Picker.Item label='Caucasian Sheepdog / Caucasian Ovtcharka' value='Caucasian Sheepdog / Caucasian Ovtcharka' />
        <Picker.Item label='Cavachon' value='Cavachon' />
        <Picker.Item label='Cavalier King Charles Spaniel' value='Cavalier King Charles Spaniel' />
        <Picker.Item label='Cavapoo' value='Cavapoo' />
        <Picker.Item label='Chesapeake Bay Retriever' value='Chesapeake Bay Retriever' />
        <Picker.Item label='Chihuahua' value='Chihuahua' />
        <Picker.Item label='Chinese Crested Dog' value='Chinese Crested Dog' />
        <Picker.Item label='Chinese Foo Dog' value='Chinese Foo Dog' />
        <Picker.Item label='Chinook' value='Chinook' />
        <Picker.Item label='Chiweenie' value='Chiweenie' />
        <Picker.Item label='Chocolate Labrador Retriever' value='Chocolate Labrador Retriever' />
        <Picker.Item label='Chow Chow' value='Chow Chow' />
        <Picker.Item label="Cirneco dell'Etna" value="Cirneco dell'Etna" />
        <Picker.Item label='Clumber Spaniel' value='Clumber Spaniel' />
        <Picker.Item label='Cockapoo' value='Cockapoo' />
        <Picker.Item label='Cocker Spaniel' value='Cocker Spaniel' />
        <Picker.Item label='Collie' value='Collie' />
        <Picker.Item label='Coonhound' value='Coonhound' />
        <Picker.Item label='Corgi' value='Corgi' />
        <Picker.Item label='Coton de Tuelar' value='Coton de Tuelar' />
        <Picker.Item label='Curly-Coated Retriever' value='Curly-Coated Retriever' />
        <Picker.Item label='Dachshund' value='Dachshund' />
        <Picker.Item label='Dalmatian' value='Dalmatian' />
        <Picker.Item label='Dandie Dinmont Terrier' value='Dandie Dinmont Terrier' />
        <Picker.Item label='Doberman Pinscher' value='Doberman Pinscher' />
        <Picker.Item label='Dogo Argentino' value='Dogo Argentino' />
        <Picker.Item label='Dogue de Bordeaux' value='Dogue de Bordeaux' />
        <Picker.Item label='Dutch Shepherd' value='Dutch Shepherd' />
        <Picker.Item label='English Bulldog' value='English Bulldog' />
        <Picker.Item label='English Cocker Spaniel' value='English Cocker Spaniel' />
        <Picker.Item label='English Coonhound' value='English Coonhound' />
        <Picker.Item label='English Foxhound' value='English Foxhound' />
        <Picker.Item label='English Pointer' value='English Pointer' />
        <Picker.Item label='English Setter' value='English Setter' />
        <Picker.Item label='English Shepherd' value='English Shepherd' />
        <Picker.Item label='English Springer Spaniel' value='English Springer Spaniel' />
        <Picker.Item label='English Toy Spaniel' value='English Toy Spaniel' />
        <Picker.Item label='Entlebucher' value='Entlebucher' />
        <Picker.Item label='Eskimo Dog' value='Eskimo Dog' />
        <Picker.Item label='Feist' value='Feist' />
        <Picker.Item label='Field Spaniel' value='Field Spaniel' />
        <Picker.Item label='Fila Brasileiro' value='Fila Brasileiro' />
        <Picker.Item label='Finnish Lapphund' value='Finnish Lapphund' />
        <Picker.Item label='Finnish Spitz' value='Finnish Spitz' />
        <Picker.Item label='Flat-Coated Retriever' value='Flat Coated Retriever' />
        <Picker.Item label='Fox Terrier' value='Fox Terrier' />
        <Picker.Item label='Foxhound' value='Foxhound' />
        <Picker.Item label='French Bulldog' value='French Bulldog' />
        <Picker.Item label='Galgo Spanish Greyhound' value='Galgo Spanish Greyhound' />
        <Picker.Item label='German Pinscher' value='German Pinscher' />
        <Picker.Item label='German Shepherd' value='German Shepherd Dog' />
        <Picker.Item label='German Shorthaired Pointer' value='German Shorthaired Pointer' />
        <Picker.Item label='German Spitz' value='German Spitz' />
        <Picker.Item label='German Wirehaired Pointer' value='German Wirehaired Pointer' />
        <Picker.Item label='Giant Schnauzer' value='Giant Schnauzer' />
        <Picker.Item label='Glen of Imaal Terrier' value='Glen of Imaal Terrier' />
        <Picker.Item label='Golden Retriever' value='Golder Retriever' />
        <Picker.Item label='Goldendoodle' value='Goldendoodle' />
        <Picker.Item label='Gordon Setter' value='Gordon Setter' />
        <Picker.Item label='Great Dane' value='Great Dane' />
        <Picker.Item label='Great Pyrenees' value='Great Pyrenees' />
        <Picker.Item label='Greater Swiss Mountain Dog' value='Greater Swiss Mountain Dog' />
        <Picker.Item label='Greyhound' value='Greyhound' />
        <Picker.Item label='Hamiltonstovare' value='Hamiltonstovare' />
        <Picker.Item label='Harrier' value='Harrier' />
        <Picker.Item label='Havanese' value='Havanese' />
        <Picker.Item label='Hound' value='Hound' />
        <Picker.Item label='Hovawart' value='Hovawart' />
        <Picker.Item label='Husky' value='Husky' />
        <Picker.Item label='Ibizan Hound' value='Ibizan Hound' />
        <Picker.Item label='Icelandic Sheepdog' value='Icelandic Sheepdog' />
        <Picker.Item label='Illyrian Sheepdog' value='Illyrian Sheepdog' />
        <Picker.Item label='Irish Setter' value='Irish Setter' />
        <Picker.Item label='Irish Terrier' value='Irish Terrier' />
        <Picker.Item label='Irish Water Spaniel' value='Irish Water Spaniel' />
        <Picker.Item label='Irish Wolfhound' value='Irish Wolfhound' />
        <Picker.Item label='Italian Greyhound' value='Italian Greyhound' />
        <Picker.Item label='Jack Russel Terrier' value='Jack Russel Terrier' />
        <Picker.Item label='Japanese Chin' value='Japanese Chin' />
        <Picker.Item label='Jindo' value='Jindo' />
        <Picker.Item label='Kai Dog' value='Kai Dog' />
        <Picker.Item label='Karelian Bear Dog' value='Karelian Bear Dog' />
        <Picker.Item label='Keeshond' value='Keeshond' />
        <Picker.Item label='Kerry Blue Terrier' value='Kerry Blue Terrier' />
        <Picker.Item label='Kishu' value='Kishu' />
        <Picker.Item label='Klee Kai' value='Klee Kai' />
        <Picker.Item label='Komondor' value='Komondor' />
        <Picker.Item label='Kuavasz' value='Kuavasz' />
        <Picker.Item label='Kyi Leo' value='Kyi Leo' />
        <Picker.Item label='Labradoodle' value='Labradoodle' />
        <Picker.Item label='Labrador Retriever' value='Labrador Retriever' />
        <Picker.Item label='Lakeland Terrier' value='Lakeland Terrier' />
        <Picker.Item label='Lancashire Heeler' value='Lancashire Heeler' />
        <Picker.Item label='Leonberger' value='Leonberger' />
        <Picker.Item label='Lhasa Apso' value='Lhasa Apso' />
        <Picker.Item label='Lowchen' value='Lowchen' />
        <Picker.Item label='Lurcher' value='Lurcher' />
        <Picker.Item label='Maltese' value='Maltese' />
        <Picker.Item label='Maltipoo' value='Maltipoo' />
        <Picker.Item label='Manchester Terrier' value='Manchester Terrier' />
        <Picker.Item label='Maremma Sheepdog' value='Maremma Sheepdog' />
        <Picker.Item label='Mastiff' value='Mastiff' />
        <Picker.Item label='McNab' value='McNab' />
        <Picker.Item label='Miniature Bull Terrier' value='Miniature Bull Terrier' />
        <Picker.Item label='Miniature Dachshund' value='Miniature Dachshund' />
        <Picker.Item label='Miniature Pinscher' value='Miniature Pinscher' />
        <Picker.Item label='Miniature Poodle' value='Miniature Poodle' />
        <Picker.Item label='Miniature Schnauzer' value='Miniature Schnauzer' />
        <Picker.Item label='Mixed Breed' value='Mixed Breed' />
        <Picker.Item label='Morkie' value='Morkie' />
        <Picker.Item label='Mountain Cur' value='Mountain Cur' />
        <Picker.Item label='Mountain Dog' value='Mountain Dog' />
        <Picker.Item label='Munsterlander' value='Munsterlander' />
        <Picker.Item label='Neapolitan Mastiff' value='Neapolitan Mastiff' />
        <Picker.Item label='New Guinea Singing Dog' value='New Guinea Singing Dog' />
        <Picker.Item label='Newfoundland Dog' value='Newfoundland Dog' />
        <Picker.Item label='Norfolk Terrier' value='Norfolk Terrier' />
        <Picker.Item label='Norwegian Buhund' value='Norwegian Buhund' />
        <Picker.Item label='Norwegian Elkhound' value='Norwegian Elkhound' />
        <Picker.Item label='Norwegian Lundehund' value='Norwegian Lundehund' />
        <Picker.Item label='Norwich Terrier' value='Norwich Terrier' />
        <Picker.Item label='Nova Scotia Duck Tolling Retriever' value='Nova Scotia Duck Tolling Retriever' />
        <Picker.Item label='Old English Sheepdog' value='Old English Sheepdog' />
        <Picker.Item label='Otterhound' value='Otterhound' />
        <Picker.Item label='Papillon' value='Papillon' />
        <Picker.Item label='Parson Russel Terrier' value='Parson Russel Terrier' />
        <Picker.Item label='Patterdale Terrier / Fell Terrier' value='Patterdale Terrier / Fell Terrier' />
        <Picker.Item label='Pekingese' value='Pekingese' />
        <Picker.Item label='Pembroke Welsh Corgi' value='Pembroke Welsh Corgi' />
        <Picker.Item label='Peruvian Inca Orchid' value='Peruvian Inca Orchid' />
        <Picker.Item label='Petit Basset Griffon Vendeen' value='Petit Basset Griffon Vendeen' />
        <Picker.Item label='Pharaoh Hound' value='Pharaoh Hound' />
        <Picker.Item label='Pit Bull Terrier' value='Pit Bull Terrier' />
        <Picker.Item label='Plott Hound' value='Plott Hound' />
        <Picker.Item label='Polish Lowland Sheepdog' value='Polish Lowland Sheepdog' />
        <Picker.Item label='Pomeranian' value='Pomeranian' />
        <Picker.Item label='Pomsky' value='Pomsky' />
        <Picker.Item label='Portuguese Pondengo' value='Portuguese Pondengo' />
        <Picker.Item label='Portuguese Water Dog' value='Portuguese Water Dog' />
        <Picker.Item label='Presa Canario' value='Presa Canario' />
        <Picker.Item label='Pug' value='Pug' />
        <Picker.Item label='Puggle' value='Puggle' />
        <Picker.Item label='Puli' value='Puli' />
        <Picker.Item label='Pumi' value='Pumi' />
        <Picker.Item label='Pyrenean Shepherd' value='Pyrenean Shepherd' />
        <Picker.Item label='Rat Terrier' value='Rat Terrier' />
        <Picker.Item label='Redbone Coonhound' value='Redbone Coonhound' />
        <Picker.Item label='Retriever' value='Retriever' />
        <Picker.Item label='Rhodesian Ridgeback' value='Rhodesian Ridgeback' />
        <Picker.Item label='Rottweiler' value='Rottweiler' />
        <Picker.Item label='Rough Collie' value='Rough Collie' />
        <Picker.Item label='Saint Bernard' value='Saint Bernard' />
        <Picker.Item label='Saluki' value='Saluki' />
        <Picker.Item label='Samoyed' value='Samoyed' />
        <Picker.Item label='Sarplaninac' value='Sarplaninac' />
        <Picker.Item label='Schipperke' value='Shipperke' />
        <Picker.Item label='Schnauzer' value='Schnauzer' />
        <Picker.Item label='Schnoodle' value='Schnoodle' />
        <Picker.Item label='Scottish Deerhound' value='Scottish Deerhound' />
        <Picker.Item label='Scottish Terrier' value='Scottish Terrier' />
        <Picker.Item label='Sealyham Terrier' value='Sealyham Terrier' />
        <Picker.Item label='Setter' value='Setter' />
        <Picker.Item label='Shar-Pei' value='Shar-Pei' />
        <Picker.Item label='Sheep Dog' value='Sheep Dog' />
        <Picker.Item label='Sheepadoodle' value='Sheepadoodle' />
        <Picker.Item label='Shepherd' value='Shepherd' />
        <Picker.Item label='Shetland Sheepdog / Sheltie' value='Shetland Sheepdog / Sheltie' />
        <Picker.Item label='Shiba Inu' value='Shiba Inu' />
        <Picker.Item label='Shih poo' value='Shih poo' />
        <Picker.Item label='Shih Tzu' value='Shih Tzu' />
        <Picker.Item label='Shollie' value='Shollie' />
        <Picker.Item label='Siberian Husky' value='Siberian Husky' />
        <Picker.Item label='Silky Terrier' value='Silky Terrier' />
        <Picker.Item label='Skye Terrier' value='Skye Terrier' />
        <Picker.Item label='Sloughi' value='Sloughi' />
        <Picker.Item label='Smooth Collie' value='Smooth Collie' />
        <Picker.Item label='Smooth Fox Terrier' value='Smooth Fox Terrier' />
        <Picker.Item label='South Russian Ovtcharka' value='South Russian Ovtcharka' />
        <Picker.Item label='Spaniel' value='Spaniel' />
        <Picker.Item label='Spanish Water Dog' value='Spanish Water Dog' />
        <Picker.Item label='Spinone Italiano' value='Spinone Italiano' />
        <Picker.Item label='Spitz' value='Spitz' />
        <Picker.Item label='Staffordshire Bull Terrier' value='Staffordshire Bull Terrier' />
        <Picker.Item label='Standard Poodle' value='Standard Poodle' />
        <Picker.Item label='Sussex Spaniel' value='Sussex Spaniel' />
        <Picker.Item label='Swedish Vallhund' value='Swedish Vallhund' />
        <Picker.Item label='Tennessee Treeing Brindle' value='Tennessee Treeing Brindle' />
        <Picker.Item label='Terrier' value='Terrier' />
        <Picker.Item label='Thai Ridgeback' value='Thai Ridgeback' />
        <Picker.Item label='Tibetian Mastiff' value='Tibetian Mastiff' />
        <Picker.Item label='Tibetian Spaniel' value='Tibetian Spaniel' />
        <Picker.Item label='Tibetian Terrier' value='Tibetian Terrier' />
        <Picker.Item label='Tosa Inu' value='Tosa Inu' />
        <Picker.Item label='Toy Fox Terrier' value='Toy Fox Terrier' />
        <Picker.Item label='Toy Manchester Terrier' value='Toy Manchester Terrier' />
        <Picker.Item label='Treeing Walker Coonhound' value='Treeing Walker Coonhound' />
        <Picker.Item label='Vizsla' value='Vizsla' />
        <Picker.Item label='Weimaraner' value='Weimaraner' />
        <Picker.Item label='Welsh Spring Spaniel' value='Welsh Spring Spaniel' />
        <Picker.Item label='Welsh Terrier' value='Welsh Terrier' />
        <Picker.Item label='West Highland White Terrier / Westie' value='West Highland White Terrier / Westie' />
        <Picker.Item label='Wheaten Terrier' value='Wheaten Terrier' />
        <Picker.Item label='Whippet' value='Whippet' />
        <Picker.Item label='White German Shepherd' value='White German Shepherd' />
        <Picker.Item label='Wire Fox Terrier' value='Wire Fox Terrier' />
        <Picker.Item label='Wirehaired Dachshund' value='Wirehaired Dachshund' />
        <Picker.Item label='Wirehaired Pointing Griffon' value='Wirehaired Pointing Griffon' />
        <Picker.Item label='Wirehaired Terrier' value='Wirehaired Terrier' />
        <Picker.Item label='Xoloitzcuintli / Mexican Hairless' value='Xoloitzcuintli / Mexican Hairless' />
        <Picker.Item label='Yellow Labrador Retriever' value='Yellow Labrador Retriever' />
        <Picker.Item label='Yorkshire Terrier' value='Yorkshire Terrier' />
    </Picker>
    </View>
    )}


    const rabbitBreeds = () => {
        return (
            <View>
                <Picker selectedValue={breed} onValueChange={currBreed => setBreed(currBreed)} style={darkModeOn ? styles.darkModePickerText : styles.pickerText} >
                    <Picker.Item label='Any' value='' />
                    <Picker.Item label='American' value='American' />
                    <Picker.Item label='American Fuzzy Lop' value='American Fuzzy Lop' />
                    <Picker.Item label='American Sable' value='American Sable' />
                    <Picker.Item label='Angora Rabbit' value='Angora Rabbit' />
                    <Picker.Item label='Belgian Hare' value='Belgian Hare' />
                    <Picker.Item label='Beveren' value='Beveren' />
                    <Picker.Item label='Britannia Petite' value='Britannia Petite' />
                    <Picker.Item label='Bunny Rabbit' value='Bunny Rabbit' />
                    <Picker.Item label='Californian' value='Californian' />
                    <Picker.Item label='Any' value='' />
                    <Picker.Item label='Any' value='' />
                    <Picker.Item label='Any' value='' />
                </Picker>
            </View>
        )
    }

const catBreeds = () => {
    return (
    <View>
        <Picker selectedValue={breed} onValueChange={currentBreed => setBreed(currentBreed)} style={darkModeOn ? styles.darkModePickerText : styles.pickerText}>
            <Picker.Item label='Any' value='' />
            <Picker.Item label='Abyssinian' value='Abyssinian' />
            <Picker.Item label='American Bobtail' value='American Bobtail' />
            <Picker.Item label='American Curl' value='American Curl' />
            <Picker.Item label='American Shorthair' value='American Shorthair' />
            <Picker.Item label='American Wirehair' value='American Wirehair' />
            <Picker.Item label='Applehead Siamese' value='Applehead Siamese' />
            <Picker.Item label='Balinese' value='Balinese' />
            <Picker.Item label='Bengal' value='Bengal' />
            <Picker.Item label='Birman' value='Birman' />
            <Picker.Item label='Bombay' value='Bombay' />
            <Picker.Item label='British Shorthair' value='British Shorthair' />
            <Picker.Item label='Burmese' value='Burmese' />
            <Picker.Item label='Burmilla' value='Burmilla' />
            <Picker.Item label='Calico' value='Calico' />
            <Picker.Item label='Canadian Hairless' value='Canadian Hairless' />
            <Picker.Item label='Chartreux' value='Chartreux' />
            <Picker.Item label='Chausie' value='Chausie' />
            <Picker.Item label='Chinchilla' value='Chinchilla' />
            <Picker.Item label='Cornish Rex' value='Cornish Rex' />
            <Picker.Item label='Cymric' value='Cymric' />
            <Picker.Item label='Devon Rex' value='Devon Rex' />
            <Picker.Item label='Dilute Calico' value='Dilute Calico' />
            <Picker.Item label='Dilute Tortoiseshell' value='Dilute Tortoiseshell' />
            <Picker.Item label='Domestic Longhair' value='Domestic Longhair' />
            <Picker.Item label='Domestic Medium Hair' value='Domestic Medium Hair' />
            <Picker.Item label='Domestic Short Hair' value='Domestic Short Hair' />
            <Picker.Item label='Egyptian Mau' value='Egyptian Mau' />
            <Picker.Item label='Exotic Shorthair' value='Exotic Shorthair' />
            <Picker.Item label='Extra-Toes Cat / Hemingway Polydactyl' value='Extra-Toes Cat / Hemingway Polydactyl' />
            <Picker.Item label='Havana' value='Havana' />
            <Picker.Item label='Himalayan' value='Himalayan' />
            <Picker.Item label='Japanese Bobtail' value='Japanese Bobtail' />
            <Picker.Item label='Javanese' value='Javanese' />
            <Picker.Item label='Korat' value='Korat' />
            <Picker.Item label='LaPerm' value='LaPerm' />
            <Picker.Item label='Maine Coon' value='Maine Coon' />
            <Picker.Item label='Manx' value='Manx' />
            <Picker.Item label='Munchkin' value='Munchkin' />
            <Picker.Item label='Nebelung' value='Nebelung' />
            <Picker.Item label='Norweigan Forest Cat' value='Norweigan Forest Cat' />
            <Picker.Item label='Ocicat' value='Ocicat' />
            <Picker.Item label='Oriental Long Hair' value='Oriental Long Hair' />
            <Picker.Item label='Oriental Short Hair' value='Oriental Short Hair' />
            <Picker.Item label='Persian' value='Persian' />
            <Picker.Item label='Pixiebob' value='Pixiebob' />
            <Picker.Item label='Ragamuffin' value='Ragamuffin' />
            <Picker.Item label='Ragdoll' value='Ragdoll' />
            <Picker.Item label='Russian Blue' value='Russian Blue' />
            <Picker.Item label='Scottish Fold' value='Scottish Fold' />
            <Picker.Item label='Selkirk Rex' value='Selkirk Rex' />
            <Picker.Item label='Siamese' value='Siamese' />
            <Picker.Item label='Siberian' value='Siberian' />
            <Picker.Item label='Silver' value='Silver' />
            <Picker.Item label='Singapura' value='Singapura' />
            <Picker.Item label='Snowshoe' value='Snowshoe' />
            <Picker.Item label='Somali' value='Somali' />
            <Picker.Item label='Sphynx / Hairless Cat' value='Sphynx / Hairless Cat' />
            <Picker.Item label='Tabby' value='Tabby' />
            <Picker.Item label='Tiger' value='Tiger' />
            <Picker.Item label='Tonkinese' value='Tonkinese' />
            <Picker.Item label='Tortoiseshell' value='Tortoiseshell' />
            <Picker.Item label='Toyger' value='Toyger' />
            <Picker.Item label='Turkish Angora' value='Turkish Angora' />
            <Picker.Item label='Turkish Van' value='Turkish Van' />
            <Picker.Item label='Tuxedo' value='Tuxedo' />
            <Picker.Item label='York Chocolate' value='York Chocolate' />
        </Picker>
    </View>
        
    )
}

    return (
        <View style={darkModeOn ? styles.darkMode : styles.container}>
            <AltTopBar />
            <Text style={{fontWeight: 'bold', marginTop: 25, marginLeft: 20, fontSize: 16, color: 'gray', opacity: 0}}>Search Filters</Text>
            <View style={styles.form}>
                <Text style={darkModeOn ? styles.darkModeAnimalType : styles.animalText}>Animal Type</Text>
                <Picker selectedValue={animalType} onValueChange={current => setAnimalType(current)} style={darkModeOn ? styles.darkModePickerText : styles.pickerText}>
                    <Picker.Item label='All' value='' />
                    <Picker.Item label='Dogs' value='Dog' />
                    <Picker.Item label='Cats' value='Cat' />
                    <Picker.Item label='Rabbits' value='Rabbit' />
                    <Picker.Item label='Birds' value='Bird' />
                </Picker>

                <Text style={darkModeOn ? styles.darkModeAgeText : styles.ageText}>Age</Text>
                <Picker selectedValue={age} onValueChange={currentAge => setAge(currentAge)} style={darkModeOn ? styles.darkModePickerText : styles.pickerText}>
                    <Picker.Item label='Any' value='' />
                    <Picker.Item label='Adult' value='Adult' />
                    <Picker.Item label='Young' value='Baby' />
                </Picker>

                <Text style={darkModeOn ? styles.darkModeGenderText : styles.genderText}>Gender</Text>
                <Picker selectedValue={gender} onValueChange={currentGender => setGender(currentGender)} style={darkModeOn ? styles.darkModePickerText : styles.pickerText}>
                    <Picker.Item label='Any' value='' />
                    <Picker.Item label='Male' value='Male' />
                    <Picker.Item label='Female' value='Female' />
                </Picker>


      
                <Text style={darkModeOn ? styles.darkModeBreedText : styles.breedText}>Breed</Text>
                { (animalType == 'Dog' || animalType == '') ? dogBreeds() : (animalType == 'Cat') ? catBreeds() : (animalType == 'Rabbit') ? rabbitBreeds() : '' }
               

                

            
                
                <Text style={{ marginTop: 0, marginLeft: 5, marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: 'dodgerblue'}}>Search Breed</Text>
             

                <TextInput
                    style={darkModeOn ? styles.darkModeInput : styles.input}
                    name='breed'
                    onChangeText={(text) => setBreed(text)}
                    placeholder='Breed'
                    placeholderTextColor={darkModeOn ? 'white' : 'black'}
                />

                <Text style={{marginLeft: 5, marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: 'dodgerblue'}}>Location</Text>
             

                <TextInput
                    style={darkModeOn ? styles.darkModeInput : styles.input}
                    name='location'
                    onChangeText={(text) => setLocation(text)}
                    placeholder='Zip Code'
                    placeholderTextColor={darkModeOn ? 'white' : 'black'}
                />
                
                
                <View style={{marginVertical: 25}}>

                <Button title='Save' onPress={handleSubmit}
                style={{ fontSize: 20, color: 'white', }}
                containerStyle={{padding: 10, height: 50, borderRadius: 15, overflow: 'hidden', backgroundColor: darkModeOn ? 'dodgerblue' : 'rgba(38, 64, 179, 0.842)',  }}> Save</Button>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight(),
        backgroundColor: 'white'
    },
    darkMode: {
        flex: 1,
        marginTop: getStatusBarHeight(),
        backgroundColor: '#000'
    },
    form: {
        flex: 1,
        marginTop: -20,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(38, 64, 179, 0.842)',
        marginBottom: 20,
        borderRadius: 10, 
        padding: 7,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    darkModeInput: {
        borderWidth: 1,
        borderColor: 'rgba(38, 64, 179, 0.842)',
        marginBottom: 20,
        borderRadius: 10, 
        padding: 7,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        color: 'white',
    },
    pickerText: {
        marginBottom: 30,
        color: '#000'
    },
    darkModePickerText: {
        marginBottom: 25,
        color: 'white',
    },
    darkModeAnimalType: {
        marginLeft: 7,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'dodgerblue',
    },
    animalText: {
        marginLeft: 7,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'rgba(38, 64, 179, 0.842)',
    },
    ageText: {
        marginLeft: 8,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#ef32d9b2',
    },
    darkModeAgeText: {
        borderTopWidth: 1,
        borderTopColor: 'white',
        marginLeft: 7,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#ef32d9b2',
        paddingTop: 8
    },
    text: {
        borderTopWidth: 1,
        borderTopColor: 'white',
        marginLeft: 7,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'rgba(38, 64, 179, 0.842)',
    },
    darkModeGenderText: {
        borderTopWidth: 1,
        borderTopColor: 'white',
        marginLeft: 7,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#c471ed',
        paddingTop: 8
    },
    genderText: {
        marginLeft: 7,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: '#c471ed',
    },
    darkModeBreedText: {
        borderTopWidth: 1,
        borderTopColor: 'white',
        marginLeft: 7,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'lightskyblue',
        paddingTop: 8
    },
    breedText: {
        marginLeft: 7,
        marginBottom: 10, 
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'rgba(38, 64, 179, 0.842)',
    },
})