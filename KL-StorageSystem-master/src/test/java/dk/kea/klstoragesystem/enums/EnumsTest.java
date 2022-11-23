package dk.kea.klstoragesystem.enums;

import dk.kea.klstoragesystem.models.enums.Grade;
import dk.kea.klstoragesystem.models.enums.Supplier;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/**
 * @author Julius Panduro
 */
public class EnumsTest {
    private final static int NUM_OF_GRADES = 3;
    private final static int NUM_OF_SUPPLIERS = 4;

    @Test
    public void enumTest() {
        /**
         * @Documentation
         * At first, they are failing because there was no Grade and Supplier enums (RED TEST)
         * Afterwards there was developed 3 grades and 4 suppliers
         * and the test was passing (GREEN TEST)
         *
         */
        assertEquals(NUM_OF_GRADES, Grade.values().length);
        assertEquals(NUM_OF_SUPPLIERS, Supplier.values().length);
    }
}
