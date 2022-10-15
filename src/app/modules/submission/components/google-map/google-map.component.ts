import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Submission } from './../../models/submission.model';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnChanges, AfterViewInit {
  @Input() submissions: Submission[] = [];

  @ViewChild('googleMap') googleMap!: ElementRef;
  map!: google.maps.Map;
  zoom!: number;
  marker!: google.maps.Marker;
  markers: google.maps.Marker[] = [];
  placeService!: google.maps.places.PlacesService;
  infoWindow!: google.maps.InfoWindow;
  bounds!: google.maps.LatLngBounds;
  mapOptions!: google.maps.MapOptions;
  mapMarkerImage = '/assets/images/marker.png';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['submissions'] && changes['submissions'].previousValue) {
      this.addMap(changes['submissions'].currentValue);
    }
  }

  ngAfterViewInit(): void {
    this.addMap(this.submissions);
  }

  addMap(mapData: any) {
    const mapOrigin = new google.maps.LatLng(0, 0);
    const mapOptions = this.getGoogleMapOptions(mapOrigin);
    this.map = new google.maps.Map(this.googleMap.nativeElement, mapOptions);
    this.bounds = new google.maps.LatLngBounds();
    this.infoWindow = new google.maps.InfoWindow();
    mapData.forEach((submission: Submission) => {
      this.createLocationMarkers(submission);
    });
    this.map.fitBounds(this.bounds);
  }

  createLocationMarkers(submission: Submission) {
    const markerPosition = new google.maps.LatLng(
      submission.address.latitude,
      submission.address.longitude
    );

    const markerIcon = {
      url: this.mapMarkerImage,
      size: new google.maps.Size(40, 40),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 40),
      scaledSize: new google.maps.Size(40, 40),
    };
    const placeMarker = new google.maps.Marker({
      position: markerPosition,
      map: this.map,
      icon: markerIcon,
    });

    this.markers.push(placeMarker);

    this.bounds.extend(markerPosition);

    const contentString =
      '<div class="map-infoWindow"><h4 style="text-transform: capitalize; font-size: 20px; margin: 0 0 10px">' +
      submission.name +
      '</h4><p>' +
      submission.address.full_address +
      '</p><p style="text-transform: uppercase; margin-top: 10px; font-size:12px; font-weight: 500;">' +
      submission.status +
      '</p></div>';

    google.maps.event.addListener(placeMarker, 'click', () => {
      this.infoWindow.setContent(contentString);
      this.infoWindow.open(this.map, placeMarker);
    });
  }

  getGoogleMapOptions(center: google.maps.LatLng) {
    return {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center,
      zoom: 14,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      streetViewControl: false,
      scrollWheel: false,
    };
  }
}
