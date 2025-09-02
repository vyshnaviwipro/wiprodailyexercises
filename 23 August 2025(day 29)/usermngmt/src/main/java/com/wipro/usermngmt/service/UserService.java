<<<<<<< HEAD
package com.wipro.usermngmt.service;

import java.util.List;

import com.wipro.usermngmt.dto.Token;
import com.wipro.usermngmt.entity.User;

public interface UserService {
	List<User> findAll();
	User findById(int id);
	void save(User user);
	void deleteById(int id);
	Token login(User user);
}
=======
package com.wipro.usermngmt.service;

import java.util.List;

import com.wipro.usermngmt.dto.Token;
import com.wipro.usermngmt.entity.User;

public interface UserService {
	List<User> findAll();
	User findById(int id);
	void save(User user);
	void deleteById(int id);
	Token login(User user);
}
>>>>>>> cde7585e31163cea2ffaa65881e3528e8317613f
