package giflib.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // annotation on a controller class so that it gets detected during Spring package scanning.
public class GifController {
    @RequestMapping(value = "/") //  used for mapping a request URI to a method in a Spring controller
    // @Response: this annotation so that the spring framework would use the string we return as the response **without further** processing so
    //    @ResponseBody
    public String listGifs() {
        return "home"; // need to return the same name with html should be use to the response
    }
}
