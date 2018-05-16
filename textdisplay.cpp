std::string textDisplay(std::vector<int> keycodes) {
	std::stringstream ss;
    std::vector<char> key_acts;
    char lowC;
    unsigned int cursor_location = 0;
    unsigned int cursor_max = 0;

    for (int i = 0; i < keycodes.size(); i++){
        switch(keycodes.at(i)){
            case(8):
                if (cursor_location > 0 && cursor_max > 0) {
                    key_acts.erase(key_acts.begin() + (cursor_location-1));
                    cursor_location--;
                    cursor_max--;
                }
                break;
            case(32):
                key_acts.insert(key_acts.begin() + cursor_location, ' ');
                cursor_location++;
                cursor_max++;
                break;
            case(46):
                if ((cursor_location < cursor_max)) {
                    key_acts.erase(key_acts.begin() + (cursor_location));
                    cursor_max--;
                }
                break;
            case(37):
                if (cursor_location > 0) {
                    cursor_location--;
                    //std::cout << "left arrow \n";
                }
                break;
            case(39):
                if (cursor_location < cursor_max) {
                    cursor_location++;
                    //std::cout << "right arrow \n";
                }
                break;
            case (35): cursor_location = cursor_max; break;
            case (36): cursor_location = 0; break;
            case (186):
                key_acts.insert(key_acts.begin() + cursor_location, ';');
                cursor_location++;
                cursor_max++;
                break;
            case (188):
                key_acts.insert(key_acts.begin() + cursor_location, ',');
                cursor_location++;
                cursor_max++;
                break;
            case(190):
                key_acts.insert(key_acts.begin() + cursor_location, '.');
                cursor_location++;
                cursor_max++;break;
            case(222):
                key_acts.insert(key_acts.begin() + cursor_location, '\'');
                cursor_location++;
                cursor_max++;break;
            default:
                lowC = tolower(keycodes.at(i));
                if((lowC >= 'a' && lowC <= 'z')|| (lowC >= '0' && lowC <= '9')){
                    key_acts.insert(key_acts.begin() + cursor_location, lowC);
                    cursor_location++;
                    cursor_max++;
                }
                break;
        }


        if (cursor_location > cursor_max)
            cursor_location = cursor_max;

    }

    for (int i = 0; i < key_acts.size(); i++) {
        ss << key_acts.at(i);
    }

    return ss.str();
}
