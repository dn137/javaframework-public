package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;

@JsonIgnoreProperties(ignoreUnknown = true)
@NoArgsConstructor
public class ImportedDates {

public String ImportedDate;
	
	/*public String getImportedDate() {
        return this.ImportedDate;
    }
 
    public void setImportedDate(String importedDate) {
        this.ImportedDate = importedDate;
    }*/

}
