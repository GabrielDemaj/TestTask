/**
 * Button component that handles press interaction and styling.
 *
 * Accepts various props like onPress, text, icons, styles etc.
 * Renders a Pressable view with text and optional icons.
 * Handles loading state and disabled interaction.
 * Uses Expo Haptics for press feedback.
 * Styles based on theme and additional style props.
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  ViewStyle,
  TextStyle,
  Pressable,
} from "react-native";
import * as Haptics from "expo-haptics";

type Props = {
  onPress?: any;
  text: string;
  startIcon?: any;
  endIcon?: any;
  style?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle;
  loading?: boolean;
  disabled?: boolean;
};

export default function Button({
  onPress,
  text,
  startIcon,
  endIcon,
  style = {},
  textStyles = {},
  loading = false,
  disabled = false,
}: Props) {
  const handlePress = () => {
    if (!disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      if (onPress) {
        onPress();
      }
    }
  };

  return (
    <Pressable
      onPress={disabled ? undefined : handlePress}
      style={[
        styles.container,
        style,
        {
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size={22} color={"#fff"} style={textStyles as any} />
      ) : (
        <>
          {startIcon && (
            <View style={[styles.startIcon, { marginRight: text ? 15 : 0 }]}>
              {startIcon}
            </View>
          )}
          {text && (
            <Text numberOfLines={1} style={[styles.text, textStyles]}>
              {text}
            </Text>
          )}
          {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#252223",
  },
  text: {
    fontSize: 12,
    color: "#fff",
    alignSelf: "center",
    textTransform: "capitalize",
    lineHeight: 24,
  },
  startIcon: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  endIcon: {
    width: "10%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
