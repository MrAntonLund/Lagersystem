package dk.kea.klstoragesystem.repositories;

import dk.kea.klstoragesystem.models.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Julius Panduro
 */
public interface InvoicesRepository extends JpaRepository<Invoice, Long> {

}
