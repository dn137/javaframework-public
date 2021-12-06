package com.expleoautomation.utils;

import com.google.common.base.Splitter;

import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class StringUtils {

  /**
   * @param commaSeparatedExpectedLayersListAsString comma separated strings
   * @return List containing the comma separarted strings each as a separate element
   */
  public static List<String> commaSeparatedStringAsListOfStringsReplacingColonAsSpace(
      String commaSeparatedExpectedLayersListAsString) {
    List<String> stringList =
        Arrays.asList(
            org.apache.commons.lang3.StringUtils.splitByWholeSeparator(
                commaSeparatedExpectedLayersListAsString, ","));
    stringList =
        stringList.stream()
            .map(
                string -> {
                  string = string.replace(':', ' ');
                  string = string.replace('"', ' ').trim();
                  return string;
                })
            .collect(Collectors.toList());
    return stringList;
  }
  /**
   * @param separatedString separated strings
   * @param separator
   * @return List containing the comma separarted strings each as a separate element
   */
  public static List<String> separatedStringAsListOfLowercaseStrings(
      String separatedString, String separator) {
    List<String> stringList =
        Splitter.on(separator).trimResults().splitToList(separatedString.toLowerCase());
    return stringList;
  }

  public static String removeAllNonAlphaNumericChars(String originalString) {
    String tmp = originalString.replaceAll("[^A-Za-z0-9 ]", "");
    return tmp;
  }
  public static String removeAllNonAlphaNumericCharsAndSpaces(String originalString) {
    String tmp = originalString.replaceAll("[^A-Za-z0-9]", "");
    return tmp;
  }
  

  
  
  
  
}
