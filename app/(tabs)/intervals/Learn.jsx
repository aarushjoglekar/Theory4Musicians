import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Title from "../../../components/Title";
import BackButton from "../../../components/BackButton";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function IntervalsLearn() {
  return (
    <ImageBackground
      source={require("../../../assets/images/BackgroundImages/TextBackground.jpeg")}
      style={{ flex: 1, padding: 50 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Title title="Intervals" />
          <Text style={styles.Subtitle}>{"\n"}What are Intervals</Text>
          <Text style={styles.LearnText}>
            {"\t"}Intervals can be defined as the distance between two notes. It
            is helpful to be aware of intervals as they can help you understand
            the relationship between two notes in music. They can also help you
            play music by ear. This is because when you listen to a song, your
            brain will tend to remember the intervals between notes. This also
            makes it easy to transpose songs to any key.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Distance Between two Notes
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}The form in which intervals are identified can be broken into
            two parts. The quality and the distance. Identifying the distance is
            fairly simple - you just have to recognize how many notes (without
            accidentals) are from the first note - the bottom note - to the
            second note - the top note - (inclusive). For example if the
            interval consists of D and Bb, you can see the notes between them
            without accidentals are D, E, F, G, A, and Bb (Bb has an accidental
            because we have to include the notes of the interval in the count).
            Since there are six notes from D to Bb, this interval would be a
            sixth.
            {"\n"}
            {"\t"}Another way to think about the distance between two notes is
            to use scales. Here we can see that a B (with any kind of
            accidental) would be the sixth note in a D scale (D could also have
            any kind of accidental and this would still work).
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of Perfect Intervals
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}There are two sets of qualities that could apply to intervals.
            The first one is used when the interval distance is a 4th, 5th, or
            8th. To identify the quality of these intervals, you must first
            recognize if the interval is perfect or not. If the interval is
            perfect, the second note with accidentals will appear in the first
            note’s Major or Minor scale. For example if the two notes are B and
            F#, the distance is a 5th. Since F# is the 5th note in a B Major or
            B Minor scale, the interval between B and F# would be a Perfect 5th
            otherwise notated as a P5.
            {"\n"}
            {"\t"}If the interval turns out to not be perfect, you should try to
            identify what the perfect interval would look like. For example if
            the two notes were Bb and F#, we would try to keep one of the notes
            and see what the other would have to be for it to be perfect. If we
            kept the Bb, F# would have to lower a half step to F for the
            interval to be perfect. But since it is one half step greater than
            it should be, the interval is an Augmented 5th otherwise notated as
            A5. However if the interval is one half step less it needs for it to
            be perfect (Ex: B and F), it can be considered a Diminished interval
            or in our example notated as a D5.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of Non-Perfect Intervals
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}The second set of qualities applies to non-perfect intervals
            or 2nds, 3rds, 6ths, and 7ths. Let's take an example of a 3rd
            consisting of A and C#. Similarly to the strategy for Perfect
            intervals, you would check if C# appears in an A Major scale. (Note
            this time a minor scale will not work). Since it does, this
            interval’s quality is Major and can be written as M3.
            {"\n"}
            {"\t"}However if the interval is not Major, imagine what it would be
            if it were major. For example if our interval was G and Bb, Bb does
            not appear in a G Major scale. We would need a B for it to be a
            Major 3rd. However since the interval distance is one half step less
            than a Major interval, this interval would be a Minor 3rd or a m3.
            {"\n"}
            {"\t"}Continuing this pattern will show us that if an interval has
            one less half step than a minor interval, it will be diminished or a
            d3 in the example of G and B-double flat. On the other hand, if an
            interval contains one more half step than a Major interval, it
            becomes Augmented or an A3 in the example of G and B#.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Distance of Intervals Common Mistake
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Sometimes you may have an interval such as the previous
            example which contains complicated accidentals. For example a G and
            a B#. Though you may argue that B# is the same note as C and the
            interval is therefore a 4th, you must take into account that the
            note is technically a variation of B, so rather than being a Perfect
            4th, it would be an Augmented 3rd.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of Intervals With Complicated
            Accidentals Trick
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Sometimes you may come across an interval with complicated
            accidentals. For example Eb and G-double flat. Though the strategies
            above will work to identify the interval, it may be difficult and
            slow. Luckily, a simple trick exists. If the number of half steps
            between two notes remains the same, then the quality of the interval
            will remain the same as well. Using this knowledge, you can raise
            both of the notes by a half step. In this example, that will result
            in the new two notes being E and Gb. From here we can clearly see
            this is a diminished 3rd. And by remembering that when we changed
            notes, we didn’t change the interval, we can say that the interval
            of Eb and G-double flat is a d3.
          </Text>
        </ScrollView>
        <View style={{ flex: 0.01 }} />
        <View style={{ flex: 0.02 }}>
          <BackButton />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: 17,
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    width: 70,
    height: 45,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },

  Subtitle: {
    color: "#000",
    fontFamily: "Verdana-Bold",
    fontSize: RFPercentage(1.6),
  },

  LearnText: {
    color: "#000",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.6),
  },
});
