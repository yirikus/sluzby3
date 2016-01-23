package cz.yirikus.sluzby;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author jiri.kus
 */
@Controller
public class ViewController {

	@RequestMapping(value="/")
	public String view(){
		return "view";
	}
}
