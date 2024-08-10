package com.Sandu.FurryFinds;

import com.Sandu.FurryFinds.Config.S3Config;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.ListBucketsRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import java.util.List;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class FurryFindsApplication {

	public static void main(String[] args) {
		SpringApplication.run(FurryFindsApplication.class, args);
	}

}
