package dk.kea.klstoragesystem.repositories;

import dk.kea.klstoragesystem.models.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * @author Julius Panduro
 */
@Repository
public interface UnitsRepository extends JpaRepository<Unit, Long> {
}
