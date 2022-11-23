package dk.kea.klstoragesystem.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Item {

    private Long id;
    private String name;
    private String model;
    private Integer count;



}
