package dk.kea.klstoragesystem.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dk.kea.klstoragesystem.models.enums.Grade;
import dk.kea.klstoragesystem.models.enums.Supplier;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;

/**
 * @author Julius Panduro
 */
@Data
@Table(name = "units")
@Entity
@NoArgsConstructor
public class Unit {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column
    private String name;

    @Column
    private String model;

    @Column
    private String barcode;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Supplier supplier;

    @Column
    private int storage_one;

    @Column
    private int storage_two;

    @Column
    private int storage_three;

    @Column
    private double price;

    @Column
    private String type;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Grade grade;

    @Column
    private int lowAmount;

    @Column
    private int criticalAmount;


    @ManyToMany(mappedBy = "units", fetch = FetchType.LAZY)
    private List<Bundle> bundles;

}
