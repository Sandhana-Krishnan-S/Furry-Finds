package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.ReviewTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<ReviewTable , Long> {
}
