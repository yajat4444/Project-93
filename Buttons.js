import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MathematicsTesting from './components/MathematicsTestingApp';
import BraveryTesting from './components/BraveryTestingApp';
import PasswordGenerator from './components/PasswordGenerator.js';
import EventPosting from './components/EventPosting.js';
import Unemployement from './components/Unemployement.js';
import BirthdayGifts from './components/BirthdayGifts.js';
import TalkToSomeone from './components/TalkToSomeone.js';
import ArrangeRoom from './components/ArrangeRoom.js';
import MoralValues from './components/MoralValues.js';
import BeTensionFree from './components/BeTensionFree.js';
import TimeTable from './components/TimeTable.js';
import WhatShouldYouDo from './components/WhatShouldYouDo.js';

export default class Buttons extends React.Component{
 render(){
    return (
    <View style={styles.container}>
     <MathematicsTesting />
     <BraveryTesting />
     <PasswordGenerator />
     <EventPosting />
     <Unemployement />
     <Button color="Greenyellow"title="Birthday Gifts"
     OnPress={
        <BirthdayGifts />
     }
     >
     </Button>
     <TalkToSomeone />
     <ArrangeRoom />
     <MoralValues />
     <BeTensionFree />
     <TimeTable />
     <WhatShouldYouDo />
     </View>
  );
}
}