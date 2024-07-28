import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { router } from "expo-router";

export default function LearnToReadMusic() {
  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/HnXbt56B/Text-Background.jpg" }}
      style={{ flex: 1, padding: 50 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.title}>Reading Music</Text>
        <Text style={styles.Subtitle}>{"\n"}The Staff</Text>
        <Text style={styles.LearnText}>
          {"\t"}Music is read in something called the staff. You can see the
          staff has four spaces and five lines. To read notes, you identify
          where the note is in the staff. Each spot corresponds to a different
          note.
        </Text>
        <Image
          source={{ uri: "https://i.postimg.cc/fWGXgQNS/image.png" }}
          style={{ width: 300, height: 120, alignSelf: "center" }}
        />
        <Text style={styles.LearnText}>
          {"\t"}The staff is then broken by bar lines into different measures.
          These measures break up the piece in a way such that each measure is
          assigned a certain amount of beats. (This will be talked about later).
        </Text>
        <Image
          source={{ uri: "https://i.postimg.cc/66cJMtRY/image.png" }}
          style={{ width: 250, height: 140, alignSelf: "center" }}
        />
        <Text style={styles.Subtitle}>{"\n"}Clefs</Text>
        <Text style={styles.LearnText}>
          {"\t"}Clefs (which show up at the beginning of the staff) are what
          tell you what kinds of notes to expect in the staff. There are two
          main clefs - Treble Clef (top), and Bass Clef (bottom). Depending on
          what clef the staff is in, spaces and lines can represent different
          notes. Putting the two clefs together gets you the grand staff as seen
          below.
        </Text>
        <View style={{ height: 10 }} />
        <Image
          source={{ uri: "https://i.postimg.cc/d06mzHBP/image.png" }}
          style={{ width: 200, height: 167, alignSelf: "center" }}
        />
        <Text style={styles.Subtitle}>
          {"\n"}The General Idea to Reading Notes
        </Text>
        <Text style={styles.LearnText}>
          {"\t"}Notes in music begin from A, and go all the way through G. After
          G, the notes will loop around and go once again from A. Going up one
          note in this pattern is the same as going up one note in the staff.
          For example, take A - the second space in the treble clef. If you want
          to go up one note to B, you just have to move up one note in the
          staff. So since we are on a space note, we would have to move up to
          the line note directly above A. This note would be B. (The same
          strategy would work if you were on a line note and had to move to a
          space note).
          {"\n"}
          {"\t"}Using this logic, you really only need to know one note in each
          clef as from there you could go up or down how many ever notes to
          identify every single note in the clef. However this would be quite
          inefficient which is why there are a few tricks in each clef to
          memorize multiple notes.
        </Text>
        <Text style={styles.Subtitle}>{"\n"}Reading Notes in Treble Clef</Text>
        <Text style={styles.LearnText}>
          {"\t"}A great way to memorize the notes in the Treble clef is to use
          the word ‘FACE’. In the Treble Clef, the space notes are F, A, C, then
          E going from bottom to top. Meanwhile, the line notes can be memorized
          with the acronym - EGBDF, or Every Good Bird Does Fly. When you start,
          this can seem difficult as you have to go by the acronyms for every
          space and line. However as you practice and put reading music into
          practice, it will become much easier as your brain will start to
          memorize what notes correspond to different spots on the staff.
        </Text>
        <Image
          source={{ uri: "https://i.postimg.cc/RFbyRvpN/image.png" }}
          style={{ width: 266, height: 100, alignSelf: "center" }}
        />
        <Text style={styles.Subtitle}>
          {"\n"}Reading Notes in the Bass Clef
        </Text>
        <Text style={styles.LearnText}>
          {"\t"}The Bass clef is quite similar to the Treble clef except that
          its notes are lowered twice. For example, an A in the Treble clef
          would be in the second space, but to make it in the Bass clef, you’d
          lower it two spots or one space. Therefore the A in the Bass clef
          would be in the first space. Similarly, D in the Treble Clef is on the
          fourth line. However to get D in the Bass clef, we’d lower the fourth
          line by two spots or one line. This results in D being the third line
          in Bass Clef.
          {"\n"}
          {"\t"}However if you want to be able to recognize notes in the Bass
          Clef quicker, you should also start using acronyms for notes. For the
          lines in the Bass Clef, they are G, B, D, F, and A which can be
          memorized as Good Birds Do Fly Always. Remember as you practice, this
          process will become simpler as you will start to remember the spots
          for each note.
          {"\n"}
          {"\t"}Finally, keep in mind the practice problems in this app use
          Treble Clef, but that does not mean Bass Clef is irrelevant to learn.
        </Text>
        <Image
          source={{ uri: "https://i.postimg.cc/R01nKFFL/image.png" }}
          style={{ width: 270, height: 100, alignSelf: "center" }}
        />
        <Text style={styles.Subtitle}>{"\n"}The Piano - Overview</Text>
        <Text style={styles.LearnText}>
          {"\t"}Before we move on, it is vital that you understand the
          fundamentals of the piano. Here you can see the seven basic notes on
          the staff each correspond to a unique white key on the piano. (We’ll
          talk about the black keys in the next section).
        </Text>
        <View style={{ height: 10 }} />
        <Image
          source={{ uri: "https://i.postimg.cc/ZK7kYFxr/image.png" }}
          style={{ width: 270, height: 160, alignSelf: "center" }}
        />
        <View style={{ height: 10 }} />
        <Text style={styles.LearnText}>
          {"\t"}A simple thing to note is that going up one note on the piano is
          called a half step while going up two notes on the piano is called a
          whole step. For example, going up from F to G would be a whole step
          because we went up one note to the black key in between from F, and
          then up a second note to G. Similarly, going from A to the note in
          between A and B would be a half step because the distance is only one
          note on the piano.
          {"\n"}
          {"\t"}However make sure to keep in mind that going from one white key
          to the next is not necessarily always a whole step. This is because
          there is no black key between E and F, and the same for B and C (when
          the piano loops around). So make sure when you work with half steps
          and whole steps later on, to keep this in mind.
        </Text>
        <Text style={styles.Subtitle}>{"\n"}Accidentals</Text>
        <Text style={styles.LearnText}>
          {"\t"}Now that you know how to read basic notes on the staff, it’s
          time to learn about accidentals. Accidentals are modulations to the
          notes that essentially raise the note up or down. However, accidentals
          do not change the name of the note.
          {"\n"}
          {"\t"}Thinking about the piano image we saw earlier, you may have been
          wondering if going up one note on the staff goes up one white key, how
          do we ever play the black keys? Well we use accidentals. There are
          many kinds of accidentals but I’m going to review the most basic ones
          first.
          {"\n"}
          {"\t"}Firstly, there is the sharp (#). The sharp raises the note by
          one half step. For example if we write G in the staff, it would
          correspond to the white key on the piano labeled G. However if we put
          a sharp before the G in the staff, it would raise that G by one half
          step on the piano. Therefore the note between G and A can be written
          as G#.
          {"\n"}
          {"\t"}A second accidental is the flat (b). The flat does the opposite
          of the sharp and lowers the note by one half step. For example, if we
          have an A in the staff, but then write a flat symbol before it, that
          would lower the A one half step on the piano. This would result in the
          note between A and G being called Ab. Notice that the note between A
          and G can either be written as G# or Ab. Due to this, we can say G#
          and Ab are enharmonic, or they are different ways to notate the same
          pitch.
          {"\n"}
          {"\t"}The third common accidental is the natural (♮). The natural
          actually is not to modulate the note, rather it brings a note back to
          its original form. See in music, accidentals last the whole measure
          (for the same octave). For example, if a composer wants a G# in a
          measure but then a G in the same measure, they would not be able to
          write the G as a plain G due to the G# lasting the whole measure. To
          fix this, they would have to put the natural sign in front of the G to
          bring it back to its natural form.
          {"\n"}
          {"\t"}A few more complicated accidentals you may see sometimes are the
          double sharp (𝄪) or the double flat (𝄫). Like their names suggest, the
          double sharp raises the note by a whole step, and the double flat
          lowers the note by a whole step. A common mistake people make would be
          to replace the accidental note with its enharmonic. For example, a
          G𝄪’s enharmonic is an A. However when you are identifying chords,
          scales, intervals, or really anything else, sometimes people would
          replace the G𝄪 with an A. This can change many things about what you
          are identifying such as the root name, the interval, etc. You don’t
          really have to worry about this now, but when doing theory problems,
          make sure to not replace notes with their enharmonic.
        </Text>
        <Text style={styles.Subtitle}>{"\n"}Note Lengths</Text>
        <Text style={styles.LearnText}>
          {"\t"}Now you know how to read notes to play different pitches.
          However right now, how do you tell the difference between the length
          of these notes? I’m going to cover the few simple note lengths.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <Text style={styles.LearnText}>
              {"\t"}Firstly is the whole note. This note gets four counts and is
              one of the longest notes there is. The whole note looks like an
              empty circle.
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image
              source={{ uri: "https://i.postimg.cc/MZtMF6cT/image.png" }}
              style={{ width: 40, height: 23, alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <Text style={styles.LearnText}>
              {"\t"}The next note is the half note. This note gets two counts.
              The half note looks similar to the whole note being an empty
              circle except the half note also has a stem.
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image
              source={{ uri: "https://i.postimg.cc/2ymzkZVW/image.png" }}
              style={{ width: 35, height: 57, alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <Text style={styles.LearnText}>
              {"\t"}The third common note is the quarter note and this note only
              gets one count. The quarter note is the same as the half note
              except the head of the note (the circle) is filled.
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image
              source={{ uri: "https://i.postimg.cc/xdrBVSkJ/image.png" }}
              style={{ width: 50, height: 81, alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <Text style={styles.LearnText}>
              {"\t"}The last common note is the eighth note and this note gets ½
              count. This eighth note is the same as the quarter note except its
              stem has a little branch.
            </Text>
          </View>
          <View style={{ flex: 0.9, justifyContent: "center" }}>
            <Image
              source={{ uri: "https://i.postimg.cc/qMP1zxpW/image.png" }}
              style={{ width: 35, height: 57, alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <Text style={styles.LearnText}>
              {"\t"}Another important thing to note is that if you add a dot to
              the right of the note, it extends the counts the note gets by a
              multiplier of 1.5. For example, a dotted half note would get 3
              counts.
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image
              source={{ uri: "https://i.postimg.cc/fb22Tnyf/image.png" }}
              style={{ width: 55, height: 89, alignSelf: "center" }}
            />
          </View>
        </View>
        <Text style={styles.Subtitle}>{"\n"}Time Signatures</Text>
        <Text style={styles.LearnText}>
          {"\t"}Finally, it’s time to talk about time signatures. The time
          signature has two parts, the top number and the bottom number. The
          time signature looks something like this.
        </Text>
        <View style={{ height: 10 }} />
        <Image
          source={{ uri: "https://i.postimg.cc/Y92vRZzZ/image.png" }}
          style={{ width: 300, height: 130, alignSelf: "center" }}
        />
        <Text style={styles.LearnText}>
          {"\t"}As seen above, the top note tells you how many beats per
          measure. In the example above there are going to be four beats per
          measure. This means you can use any combination of note lengths in
          each measure as long as they add up to four counts.
          {"\n"}
          {"\t"}Meanwhile the second note tells you what note gets the beat.
          Earlier above when we talked about note lengths, we defined how many
          counts each note got. However this is not necessarily true. In the
          example above, we can see the quarter note gets the beat. So therefore
          the quarter note would indeed get one beat, while the half note, whole
          note, and eighth note would also get the counts mentioned above.
          However if the bottom note was changed to something else such as a
          two, it would mean that the half note would get a beat. This would
          mean each measure would contain 4 beats, while each beat would be a
          half note. In this example, a half note would get one beat, so a whole
          note would get two beats. Meanwhile a quarter note would get ½ of a
          beat while an eighth note would get ¼ beat. (The ratio of the lengths
          of different types of notes should always stay the same. The only
          thing changing is which note gets one beat).
        </Text>
        <Text style={styles.Subtitle}>{"\n"}So Much More</Text>
        <Text style={styles.LearnText}>
          {"\t"}So all in all, you have learned to identify notes on the staff,
          and convert them on the piano. You have learned to move up half steps
          and whole steps, and how to change notes based on accidentals. You
          also learned about note lengths and time signatures. Overall, this is
          enough basic information to read and play music. You should also be
          able to begin music theory now! However if you want to dig deeper,
          there is always more to learn. And with that, I wish you good luck,
          and hope you enjoy your future music career.
        </Text>
      </ScrollView>
      <View style={{ flex: 0.02 }} />
      <View style={{ flex: 0.01 }}>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => router.back()}
        >
          <Text style={styles.Text}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 50,
    fontFamily: "GillSans-SemiBoldItalic",
  },

  HomePageButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    width: 210,
    height: 57,
    borderRadius: 20,
    borderWidth: 0.5,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: 17,
  },

  HomePageButtonSection: {
    flex: 16,
    justifyContent: "flex-end",
    alignSelf: "center",
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

  NonCenteredText: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana",
  },

  Subtitle: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana-Bold",
  },
});
