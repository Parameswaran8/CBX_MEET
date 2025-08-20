import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LeftIcon, MinusIcon, PlusIcon } from "../../Icons/Icons";

const faqData = [
  {
    question: "How do I create an event?",
    answer:
      'Go to the "Events" tab and click on "Create Event". Fill in the details and save.',
  },
  {
    question: "How do I manage participants?",
    answer:
      'In the event dashboard, select "Manage Participants" to add, remove, or message attendees.',
  },
  {
    question: "Can I cancel an event?",
    answer:
      "Yes, go to the event details page and choose Cancel. Attendees will be notified.",
  },
  {
    question: "Can I cancel an event?",
    answer:
      "Yes, go to the event details page and choose Cancel. Attendees will be notified.",
  },

  {
    question: "Can I cancel an event?",
    answer:
      "Yes, go to the event details page and choose Cancel. Attendees will be notified.",
  },

  {
    question: "Can I cancel an event?",
    answer:
      "Yes, go to the event details page and choose Cancel. Attendees will be notified.",
  },

  {
    question: "Can I cancel an event?",
    answer:
      "Yes, go to the event details page and choose Cancel. Attendees will be notified.",
  },

  {
    question: "Can I cancel an event?",
    answer:
      "Yes, go to the event details page and choose Cancel. Attendees will be notified.",
  },

  {
    question: "Can I cancel an event?",
    answer:
      "Yes, go to the event details page and choose Cancel. Attendees will be notified.",
  },

  {
    question: "Can I cancel an event?",
    answer:
      "Yes, go to the event details page and choose Cancel. Attendees will be notified.",
  },
];

export default function FAQScreen() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // collapse if already open
    } else {
      setExpandedIndex(index); // open clicked one
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <LeftIcon size={26} color="#040C1A" />
        <Text style={styles.headerTitle}>FAQ</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.contentWrapper}>
          <View style={styles.content}>
            <Text style={styles.Head}>Hello Suraj,</Text>
            <Text style={styles.SubHeader}>
              We are here to help you with your queries and with their
              solutions.
            </Text>
          </View>

          {faqData.map((item, index) => {
            const isOpen = expandedIndex === index;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.content, styles.shadow]}
                onPress={() => toggleFAQ(index)}
                activeOpacity={0.9}
              >
                <View style={styles.Faqs}>
                  <Text style={styles.faq_header}>{item.question}</Text>
                  <View style={styles.minusIcon}>
                    {isOpen ? (
                      <MinusIcon size={12} color="#040C1A" />
                    ) : (
                      <PlusIcon size={12} color="#040C1A" />
                    )}
                  </View>
                </View>

                {isOpen && <Text style={styles.faq_info}>{item.answer}</Text>}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  scrollView: {
    flex: 1,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 8,
  },

  contentWrapper: {
    paddingHorizontal: 25,
    gap: 22,
    marginBottom: 50,
  },

  Head: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 8,
  },
  SubHeader: {
    width: "65%",
    color: "#8C909E",
  },

  content: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  shadow: {
    paddingVertical: 25,
    gap: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 }, // push shadow downwards
    shadowOpacity: 0.12, // lighter shadow for elegance
    shadowRadius: 10, // more blur for natural feel

    // Android Shadow
    elevation: 8, // not too harsh
  },

  Faqs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
  },
  faq_header: {
    fontSize: 16,
    fontWeight: "400",
    color: "#040C1A",
  },
  minusIcon: {
    padding: 10,
    backgroundColor: "#BAC1CA36",
    borderRadius: 100,
  },
  faq_info: {
    fontSize: 12.5,
    paddingLeft: 20,
    paddingRight: 10,
    color: "#434656",
  },
});
