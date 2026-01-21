import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  //ใช้ useEffect เพื่อหน่วงเวลา 3 วินาที ก่อนเปลี่ยนหน้าแล้วเปลี่ยนไปหน้า bmi
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/bmi");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/bmilogo.png")}
        style={styles.imgLogo}
      />
      <Text style={[styles.appName, { fontSize: 40 }]}>BMI Calculator</Text>
      <Text style={[styles.appName, { fontSize: 20 }]}>คำนวณค่า BMI</Text>
      <ActivityIndicator size="large" color="#ffff" style={{ marginTop: 70 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    color: "#fff",
    marginTop: 20,
    fontFamily: "Kanit_700Bold",
  },
  imgLogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center", //จัดกึ่งกลางแนวตั้ง
    alignItems: "center", //จัดกึ่งกลางแนวนอน
    backgroundColor: "#8f9e96",
  },
});
