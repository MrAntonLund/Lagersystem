package dk.kea.klstoragesystem.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;

@Data
@Table(name = "bundles")
@Entity
@NoArgsConstructor
public class Bundle {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column
    private String name;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(name = "bundles_units",
            joinColumns = {
                    @JoinColumn(name = "bundles_id", referencedColumnName = "id",
                            nullable = true, updatable = true)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "units_id", referencedColumnName = "id",
                            nullable = true, updatable = true)
            }
    )
    private List<Unit> units;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(name = "bundles_accessories",
            joinColumns = {
                    @JoinColumn(name = "bundles_id", referencedColumnName = "id",
                            nullable = true, updatable = true)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "accessories_id", referencedColumnName = "id",
                            nullable = true, updatable = true)
            }
    )
    private List<Accessory> accessories;


}


