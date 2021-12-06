package com.expleoautomation.utils;

import lombok.extern.log4j.Log4j2;

import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.OffsetDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;

/**
 * Utility for creating random values. The values generated here are intended not to be found in the
 * database.
 *
 * @author youssef.abdalla
 */
@Log4j2
public class RandomUtils {

  public static String generateRandomProjectId(boolean correctFormat) {
    String randomProjectId;
    if (correctFormat) {
      randomProjectId = "LPISWS-0" + RandomStringUtils.randomNumeric(10);
    } else {
      randomProjectId = RandomStringUtils.randomAlphanumeric(10);
    }
    return randomProjectId;
  }

  public static String generateRandomParcelId(boolean correctFormat) {
    String parcelId;
    if (correctFormat) {
      parcelId = RandomStringUtils.randomNumeric(11);
    } else {
      parcelId = RandomStringUtils.randomAlphanumeric(6);
    }
    return parcelId;
  }

  public static String generateRandomParcelLabel(boolean correctFormat) {
    String parcelLabel;
    if (correctFormat) {
      parcelLabel = RandomStringUtils.randomAlphabetic(1).toUpperCase()
          + RandomStringUtils.randomNumeric(10);
    } else {
      parcelLabel = RandomStringUtils.randomAlphanumeric(12);
    }
    return parcelLabel;
  }

  public static String generateRandomSuperFeatureId(boolean correctFormat) {
    String superFeatureId;
    if (correctFormat) {
      superFeatureId = RandomStringUtils.randomNumeric(7);
    } else {
      superFeatureId = RandomStringUtils.randomAlphanumeric(12);
    }
    return superFeatureId;
  }

  public static String generateRandomTaskType() {
    return RandomStringUtils.randomAlphanumeric(11);
  }

  /**
   * @param strWithFromTo String contains the 'From' and 'To' eg. 'From 1 to 100'
   * @return random number with decimal point of type float
   */
  public static float generateRandomNumberFromStringContainsFromTo(
      String strWithFromTo) {
    strWithFromTo = strWithFromTo.toLowerCase();
    String firstNumberStr =
        StringUtils.substringBetween(strWithFromTo, "from", "to");
    String secondNumberStr =
        StringUtils.substringAfter(strWithFromTo, "to");
    float firstNumber = Float.parseFloat(firstNumberStr);
    float secondNumber = Float.parseFloat(secondNumberStr);
    return org.apache.commons.lang3.RandomUtils
        .nextFloat(firstNumber, secondNumber);
  }
  
  public static String currentDate(String strFormat)
  {
 	 //"dd/MM/yyyy";
 	 DateFormat dateFormat = new SimpleDateFormat(strFormat);
 	 Date currentDate = new Date();
 	 return dateFormat.format(currentDate).toString();
 	 //return dateStr;
 	
  }
  
  public static String requiredDate(int numofDays,String strFormat)
  {
 	 DateFormat dateFormat = new SimpleDateFormat(strFormat);
 	 Calendar c = Calendar.getInstance();
 	 c.add(Calendar.DATE,numofDays);
 	 Date newDate = c.getTime();
 	 return dateFormat.format(newDate).toString();
 
  }
  

}
