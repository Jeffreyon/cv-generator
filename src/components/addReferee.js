import * as $ from 'jquery';
import { handler as removeSectionEventHandler } from '../lib/removeSectionEventHandler.js';
import { handler as stillAttendingEventHandler } from '../lib/stillAttendingEventHandler.js';

class AddReferee {
    constructor(){
        this.el = $(`<fieldset class="referee-details row gx-3">
        <div class="d-inline-flex justify-content-between align-items-baseline section-control d-none">
            <h6 class="mb-3">Referee</h6>
            <button class="btn btn-outline-danger btn-sm remove-section"><i class="fa fa-trash"></i></button>
        </div>
        <div class="col-12 col-sm-6 col-md-8">
            <label for="referee-name">Full Name</label>
            <input type="text" name="referee-name" class="form-control" placeholder="Big Man">
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <label for="referee-organization">Organization</label>
            <input type="text" name="referee-organization" class="form-control" placeholder="Big Man's Company">
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <label for="referee-position">Position</label>
            <input type="text" name="referee-position" class="form-control" placeholder="Big Man's Position">
        </div>
        <div class="col-12 col-sm-6 col-md-4">
            <label for="referee-contact">Contact</label>
            <input type="text" name="referee-contact" class="form-control" placeholder="Big Man's Contact">
        </div>
    </fieldset>`)

        this.el.find('.still-attending').on('click', stillAttendingEventHandler)
        this.el.find('.remove-section').on('click', removeSectionEventHandler)
        
        return this.el;        
    }
}

export {AddReferee};