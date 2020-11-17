import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View,WebView, ToastAndroid, alert } from 'react-native';
import GiftSeeingScreen from './Screens/GiftsSeeing';

export default class BirthdayGifts extends React.Component{
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      GiftName: "",
      giftStatus: "",
      requestId: "",
      userDocId: "",
      docId: "",
      Imagelink: "#",
      dataSource: "",
      requestedImageLink: "",
      showFlatlist: false,
    };
  }
  sendNotification = () => {
    db.collection("User's Information")
      .where("Username", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var name = doc.data().Name;
          db.collection("all_notifications")
            .where("userId", "==", this.state.requestId)
            .get()
            .then((snapshot) => {
              snapshot.forEach((doc) => {
                var userId = doc.data().userId;
                var giftName = doc.data().GiftName;
                db.collection("all_notifications").add({
                  userId: userId,
                  message:
                    name + " " + Name + " has liked your project " ,
                  notification_status: "unread",
                  GiftName: giftName,
                });
              });
            });
        });
      });
  };

  updateBookRequestStatus = () => {

    db.collection("User's Information")
      .where("Username", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          db.collection("User's Information").doc(doc.id).update({
            IsBookRequestActive: false,
          });
        });
      });
  };

  renderItem = ({ item, i }) => {

    let obj = {
      title: item.volumeInfo.title,
      selfLink: item.selfLink,
      buyLink: item.saleInfo.buyLink,
      imageLink: item.volumeInfo.imageLinks,
    };

    return (
      <TouchableHighlight
        style={styles.touchableopacity}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => {
          this.setState({
            showFlatlist: false,
            giftName: item.volumeInfo.title,
          });
        }}
        bottomDivider
      >
        <Text> {item.volumeInfo.title} </Text>
      </TouchableHighlight>
    );
  };

  

    video=()=>{
        const { recording, processing } = this.state;
        let button = (
          <TouchableOpacity
            onPress={this.startRecording.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> RECORD </Text>
          </TouchableOpacity>
        );
        if (recording) {
          button = (
            <TouchableOpacity
              onPress={this.stopRecording.bind(this)}
              style={styles.capture}
            >
              <Text style={{ fontSize: 14 }}> STOP </Text>
            </TouchableOpacity>
          );
        }
        if (processing) {
          button = (
            <View style={styles.capture}>
              <ActivityIndicator animating size={18} />
            </View>
          );
        }
        return (
          <View style={styles.container}>
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={"Permission to use camera"}
              permissionDialogMessage={
                "We need your permission to use your camera phone"
              }
            />
            <View
              style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
            >
              {button}
            </View>
          </View>
        ); 
    }
    render(){
        return(
     <View>
     <TextInput placeholder="Title of your Birthday Gift" />
     <Button color="blue" title="Upload"
     onPress={
     ()=>{
     <GiftSeeingScreen />
     ToastAndroid.show("Your birthday gift design is being uploaded",ToastAndroid.SHORT)
     }
    }
     />
     </View>
     )
    }  
}

  if (this.state.IsBookRequestActive === true) {
    return (
      <View style={{ flex: 1}}>
        <View
          style={{
            flex: 0.1,
          }}
        >
          <MyHeader title="Gift Status" navigation={this.props.navigation} />
        </View>
        <View
          style={styles.ImageView}
        >
          <Image
            source={{ uri: this.state.requestedImageLink }}
            style={styles.imageStyle}
          />
        </View>
        <View
          style={styles.giftstatus}
        >
          <Text
            style={{
              fontSize: RFValue(20),

            }}
          >
            Name of the Gift
          </Text>
          <Text
            style={styles.GiftName}
          >
            {this.state.GiftName}
          </Text>
          <Text
            style={styles.status}
          >
            Status
          </Text>
          <Text
            style={styles.giftStatus}
          >
            {this.state.giftStatus}
          </Text>
        </View>
        
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.1 }}>
        <MyHeader title="Request Book" navigation={this.props.navigation} />
      </View>
      <View style={{ flex: 0.9 }}>
        <Input
          style={styles.formTextInput}
          label={"Gift Name"}
          placeholder={"Gift name"}
          containerStyle={{ marginTop: RFValue(60) }}
          value={this.state.GiftName}
        />
        {this.state.showFlatlist ? (
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            enableEmptySections={true}
            style={{ marginTop: RFValue(10) }}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={{ alignItems: "center" }}>
            
            <TouchableOpacity
              style={[styles.button, { marginTop: RFValue(30) }]}
              onPress={() => {
                this.addRequest(
                  this.state.giftName
                );
              }}
            >
              <Text
                style={styles.requestbuttontxt}
              >
                Upload
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );