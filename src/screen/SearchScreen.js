import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultLst";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errorMessage, searchApi] = useResults();

  console.log(results);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We have found {results.length} results</Text>
      )}
      <ResultList title="Cost Effective" />
      <ResultList title="Bit Pricier" />
      <ResultList title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
