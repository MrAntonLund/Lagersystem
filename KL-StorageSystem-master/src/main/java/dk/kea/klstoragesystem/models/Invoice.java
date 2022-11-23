package dk.kea.klstoragesystem.models;

import lombok.Data;

import javax.persistence.*;

/**
 * @author Julius Panduro
 */
@Entity
@Data
@Table(name = "invoices")
public class Invoice {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column
    private long id;

    @Column
    private String incidentNumber;

    @Column
    private String salaryNumber;

    @Column
    private String department;

    @Column
    private String cause;

    @Column
    private String totalPrice;

}
