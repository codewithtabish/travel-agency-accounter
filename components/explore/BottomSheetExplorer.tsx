import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "@/hooks/useWrapUpBrowser";

const BottomSheetExplorer = ({
  isBottomSheetVisible,
  setIsBottomSheetVisible,
  bottomSheetModalRef,
  handlePresentModalPress,
  handleUserType,
  userType,
  setuserType,
}: any) => {
  const colorScheme = useColorScheme();

  // Ref for BottomSheetModal

  // State to control the visibility of the bottom sheet

  // Variables
  const snapPoints = useMemo(() => ["25%", "30%"], []);

  // Callbacks

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // Callbacks

  // useEffect to open the modal based on the state
  useEffect(() => {
    if (isBottomSheetVisible) {
      handlePresentModalPress();
    }
  }, [isBottomSheetVisible, handlePresentModalPress]);

  useWarmUpBrowser();

  const userSupplierORCustomer = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Customer",
    },
    {
      id: 2,
      name: "Supplier",
    },
  ];
  const handleDismissModal = () => {
    // setuserType("");
  };
  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          onDismiss={handleDismissModal}
          style={styles.bottomSheet}
          ref={bottomSheetModalRef}
          index={1} // Opens at the second snap point initially
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{
            backgroundColor: colorScheme === "dark" ? "#212529" : "#ffffff",
            borderTopColor: "red",
          }}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={styles.innerContent}>
              <Text
                style={{
                  ...styles.headerText,
                  color: colorScheme === "dark" ? "#ffffff" : "#000000",
                }}
              >
                Select Users by {``}
              </Text>
              <View
                className="h-1 border-b-gray-200 "
                style={{ borderWidth: 1 }}
              ></View>
              <View className="flex flex-row gap-4 items-center mt-1">
                {userSupplierORCustomer?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleUserType(item.name)}
                      key={index}
                      style={{ borderWidth: 1 }}
                      className={`flex-1 p-2  flex justify-center items-center
                    border-gray-400 
                    ${userType === item.name ? "bg-primary" : ""}
                rounded-md`}
                    >
                      <Text
                        className={`${
                          item.name === userType ? "text-white" : ""
                        }`}
                      >
                        {item?.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              {/* <View className="flex flex-row gap-4 items-center mt-1">
                <TouchableOpacity
                  onPress={() => handleUserType(1)} // Call the function with argument 1
                  style={{ borderWidth: 1 }}
                  className={`flex-1 p-2  flex justify-center items-center
                    border-gray-400 
                rounded-md`}
                >
                  <Text className="">Profit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={(a) => handleUserType(2)}
                  style={{ borderWidth: 1 }}
                  className={`flex-1 p-2  flex justify-center items-center
                    border-gray-400 
                rounded-md`}
                >
                  <Text className="">loss</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  bottomSheet: {
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  innerContent: {
    width: "90%",
    justifyContent: "center",
    gap: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default BottomSheetExplorer;
