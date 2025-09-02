<<<<<<< HEAD
package com.wipro.usermngmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.usermngmt.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	User findByEmailAndPassWord(String email,String passWord);
	User findByEmail(String userName);
}
=======
package com.wipro.usermngmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.usermngmt.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	User findByEmailAndPassWord(String email,String passWord);
	User findByEmail(String userName);
}
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
