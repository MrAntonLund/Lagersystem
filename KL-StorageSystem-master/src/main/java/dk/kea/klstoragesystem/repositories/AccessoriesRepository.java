package dk.kea.klstoragesystem.repositories;

import dk.kea.klstoragesystem.models.Accessory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Julius Panduro
 */
@Repository
public interface AccessoriesRepository extends JpaRepository<Accessory,Long> {
}
