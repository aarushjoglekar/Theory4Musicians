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

export default function TriadsLearn() {
  return (
    <ImageBackground
      source={require("../../../assets/images/BackgroundImages/TextBackground.jpeg")}
      style={{ flex: 1, padding: 50 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Title title="Triads" />
          <Text style={styles.Subtitle}>{"\n"}What are Triads</Text>
          <Text style={styles.LearnText}>
            {"\t"}Triads are a type of chord that contain three notes, each a
            third (interval) above the previous note. For example, if the root
            (the first note) is C, then the third could be Eb, E, or even E#.
            Meanwhile the fifth could be Gb, G, or G#. It is important to be
            able to recognize triads as they are the basic foundation to chords,
            and understanding them can allow you to analyze music better.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Identifying the Notes</Text>
          <Text style={styles.LearnText}>
            {"\t"}To identify a triad, you must first identify the three notes
            that are in the triad. Then, you have to reorder them in such a way
            that each note is a third higher than the previous note. Taking the
            earlier example, if the notes are in the order G, E, C, we would
            have to rearrange them to C, E, G. This is because E is a third
            above C and G is a third above E. From the ordered notes, we take
            the bottommost one, and that becomes the root of the chord. In this
            example, it would be a C triad.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of the Triad
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Once you have the three notes, you must identify whether the
            triad is Major, minor, Augmented, or diminished. First, if the
            interval between the first and the third is a major third (or four
            half steps) and the interval between the third and the fifth is a
            minor third (or three half steps), the triad’s quality can be
            considered Major. In our C triad example, since E is a major third
            above E, and G is a minor third above E, the triad with C, E, and G
            would be a C Major triad.
            {"\n"}
            {"\t"}Next, if the interval between the first and the third is a
            minor third, and the interval between the third and the fifth is a
            major third, the triad can be said to be minor. It is important to
            note the difference between major triads and minor triads, and to
            remember major triads have a major third then a minor third, while
            it is reversed for minor triads.
            {"\n"}
            {"\t"}Thirdly, if both intervals in the triad are minor thirds, the
            triad is diminished. Meanwhile both intervals being major would
            represent an Augmented chord.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of a Triad Trick
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}Different qualities of triads can be formed if given another
            quality of the same triad. For example, if the third of a Major
            triad is lowered a half step, the triad changes to minor. In our
            previous example, C, E, and G, would make a Major triad but if E
            became Eb, then the triad changes to minor.
            {"\n"}
            {"\t"}To get a diminished chord, we would take the minor triad and
            lower the fifth. In our example above, the diminished triad would
            consist of C, Eb, and Gb.
            {"\n"}
            {"\t"}Finally to get an Augmented chord, you would need to take the
            major chord and raise the fifth a half step. In our example, the
            notes in a C Augmented Triad would be C, E, and G#.
          </Text>
          <Text style={styles.Subtitle}>
            {"\n"}Identifying the Quality of a Difficult Key
          </Text>
          <Text style={styles.LearnText}>
            {"\t"}While these tricks above will work for all triads, some triads
            can be more challenging than others. For example a B# triad with
            B-sharp, D-double sharp, and F-double sharp, that contains
            complicated accidentals can be challenging to identify. Luckily a
            simple trick exists to go around this. Similar to the strategy used
            in scales, you can change the root of the triad from B# to B. Since
            we move the root down a half step but want to keep the quality the
            same, we must also move the other notes a half step down. This
            results in the three notes being B, D#, and F#. This makes it easier
            to see that the quality of this triad is Major. And since the
            quality of the triad did not change when we moved down from B# to B,
            the triad we were asked to find would be B# Major.
          </Text>
          <Text style={styles.Subtitle}>{"\n"}Inversions</Text>
          <Text style={styles.LearnText}>
            {"\t"}While these will not show up in any of the problems in this
            app, it is important to know about inversions as they are more
            realistic to what you would see in real music. In actual
            compositions, it is highly unlikely that the notes in triads will
            actually all be a third apart. Instead, they might be ordered
            differently, and could also be divided by multiple octaves.
            {"\n"}
            {"\t"}These different chords represent different inversions. To
            identify the inversion, you must know what the lowest note is. For
            example if the triad consisted of G, C, E, the lowest note is G.
            After ordering the notes so each of them is a third above the
            previous note, see where the lowest note ended up. If the lowest
            note turns out to be the root of the triad, the triad is in root
            position. If the lowest note ends up as the third, the triad is in
            first inversion. Finally, if the lowest note is the fifth of the
            chord, the triad is in second inversion.
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
