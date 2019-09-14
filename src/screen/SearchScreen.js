import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../apis/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong. Try again");
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We have found {results.length} results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
