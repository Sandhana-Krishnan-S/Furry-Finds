package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.ReviewTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewTable , Long> {
}
